import * as cdk from '@aws-cdk/core'
import * as ec2 from '@aws-cdk/aws-ec2';
import { Asset } from '@aws-cdk/aws-s3-assets';
import path = require("path");

interface GhostServerInstanceProps {
  vpc: ec2.Vpc;
}

export class GhostServerInstance extends cdk.Construct {
  public readonly ghostServerSecurityGroup: ec2.SecurityGroup;
  public readonly ghostServerInstance: ec2.Instance;

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

    userDataAsset.grantRead(this.ghostServerInstance.role);
  }
}