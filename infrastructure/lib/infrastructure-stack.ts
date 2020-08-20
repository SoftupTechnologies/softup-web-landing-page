import * as cdk from "@aws-cdk/core"
import * as s3 from "@aws-cdk/aws-s3"
import { Code, Function, Runtime } from "@aws-cdk/aws-lambda"
import { Cors, LambdaIntegration, RestApi } from "@aws-cdk/aws-apigateway"
import * as s3Deployment from "@aws-cdk/aws-s3-deployment"
import { Effect, PolicyStatement } from "@aws-cdk/aws-iam"
import * as rds from '@aws-cdk/aws-rds';
import * as ec2 from '@aws-cdk/aws-ec2';
import { GhostServerInstance } from './ghost_server';

import { MyVpc } from './vpc';
import { RdsInfrastructure } from './rds';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const websiteBucket = s3.Bucket.fromBucketName(this, 'SoftupBucket', 'softup.co');

    new s3Deployment.BucketDeployment(this, "deployStaticWebsite", {
      sources: [s3Deployment.Source.asset("../website/public")],
      destinationBucket: websiteBucket
    })

    const formSubmitFunction = new Function(this, "formSubmitFunction", {
      runtime: Runtime.NODEJS_12_X,
      handler: "index.handler",
      code: Code.fromAsset("./src")
    })

    const api = new RestApi(this, "api", {
      deployOptions: {
        stageName: "prod"
      },
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS
      }
    })

    api.root.addMethod("POST", new LambdaIntegration(formSubmitFunction))

    const sendMailPolicy = new PolicyStatement(
      {
        actions: ["SES:SendEmail"],
        effect: Effect.ALLOW,
        resources: ["arn:aws:ses:eu-central-1:485652621123:identity/info@softup.co"]
      })

    formSubmitFunction.addToRolePolicy(sendMailPolicy)
  }
}


export class GhostServerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new MyVpc(this, 'GhostVpc', {
      vpcCidr: '10.0.0.0/16',
      maxAzs: 1,
      publicSubnetsNo: 1,
    });

    const dbSg = new ec2.SecurityGroup(this, 'OpenSg', {
      vpc: vpc.vpc,
      securityGroupName: 'Connections from outside',
    });

    dbSg.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(3306),
    )

    const ghostDb = new RdsInfrastructure(this, 'GhostDb', {
      projectName: 'softup-ghost-blog',
      dbMasterUserName: 'ghostdbuser',
      vpc: vpc.vpc,
      databaseName: 'ghostdb',
      dbEngine: rds.DatabaseInstanceEngine.MYSQL,
      publicAccessible: true,
      dbPort: 3306,
      ingressSgs: [dbSg],
    });

    new GhostServerInstance(this, 'GhostServer', {
      vpc: vpc.vpc,
    });
  }
}