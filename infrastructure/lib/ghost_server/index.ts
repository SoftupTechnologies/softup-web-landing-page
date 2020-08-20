import * as cdk from '@aws-cdk/core'
import * as ec2 from '@aws-cdk/aws-ec2';
import { Asset } from '@aws-cdk/aws-s3-assets';
import { CloudFrontWebDistribution, CloudFrontAllowedMethods, OriginProtocolPolicy, ViewerProtocolPolicy, PriceClass } from '@aws-cdk/aws-cloudfront'
import path = require("path");

interface GhostServerInstanceProps {
  vpc: ec2.Vpc;
}

export class GhostServerInstance extends cdk.Construct {
  public readonly ghostServerSecurityGroup: ec2.SecurityGroup;
  public readonly ghostServerInstance: ec2.Instance;
  public readonly cfDistribution: CloudFrontWebDistribution;

  constructor(scope: cdk.Construct, id: string, props: GhostServerInstanceProps) {
    super(scope, id);

    const { vpc } = props;

    this.ghostServerSecurityGroup = new ec2.SecurityGroup(this, 'GhostSg', {
      vpc,
      allowAllOutbound: true,
      description: 'Enables SSH Access to ghost server'
    });

    this.ghostServerSecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'SSH from anywhere');
    this.ghostServerSecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'HTTP from anywhere');
    this.ghostServerSecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'HTTPS from anywhere');

    this.ghostServerInstance = new ec2.Instance(this, 'GhostServerInstance', {
      instanceName: 'ghost server',
      vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux({
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
        edition: ec2.AmazonLinuxEdition.STANDARD,
      }),
      securityGroup: this.ghostServerSecurityGroup,
      keyName: 'ghost-cms-key-pair',
      vpcSubnets: {
        subnets: vpc.publicSubnets,
      }
    });

    const userDataAsset = new Asset(this, 'UserDataAsset', {
      path: path.join(__dirname, 'ec2_user_data.sh') 
    });

    const localPath = this.ghostServerInstance.userData.addS3DownloadCommand({
      bucket: userDataAsset.bucket,
      bucketKey: userDataAsset.s3ObjectKey,
    });

    this.ghostServerInstance.userData.addExecuteFileCommand({
      filePath: localPath,
    });

    this.cfDistribution = new CloudFrontWebDistribution(this, 'CfDistribution', {
      originConfigs: [
        {
          connectionAttempts: 3,
          behaviors: [
            {
              isDefaultBehavior: true,
              allowedMethods: CloudFrontAllowedMethods.ALL,
              forwardedValues: {
                queryString: true,
                cookies: {
                  forward: 'all',
                },
                headers: ['*'],
              }
            }
          ],
          customOriginSource: {
            domainName: this.ghostServerInstance.instancePublicDnsName,
            originProtocolPolicy: OriginProtocolPolicy.MATCH_VIEWER,
          },
        }
      ],
      aliasConfiguration: {
        acmCertRef: 'arn:aws:acm:us-east-1:485652621123:certificate/d525a59b-d9a4-465a-b992-616af47bd817',
        names: ['blog.softup.co'],     
      },
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      defaultRootObject: '',
      priceClass: PriceClass.PRICE_CLASS_ALL,
    });

    userDataAsset.grantRead(this.ghostServerInstance.role);
  }
}