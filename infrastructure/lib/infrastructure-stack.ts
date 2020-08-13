import * as cdk from "@aws-cdk/core"
import * as s3 from "@aws-cdk/aws-s3"
import { Code, Function, Runtime } from "@aws-cdk/aws-lambda"
import { Cors, LambdaIntegration, RestApi } from "@aws-cdk/aws-apigateway"
import * as s3Deployment from "@aws-cdk/aws-s3-deployment"
import { Effect, PolicyStatement } from "@aws-cdk/aws-iam"

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const websiteBucket = new s3.Bucket(this, "softup-website-v3-bucket", {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404/index.html"
    })

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
        resources: ["arn:aws:ses:eu-central-1:485652621123:identity/erald.totraku@softup.co"]
      })

    const sendMailPolicyE = new PolicyStatement(
      {
        actions: ["SES:SendEmail"],
        effect: Effect.ALLOW,
        resources: ["arn:aws:ses:eu-central-1:485652621123:identity/info@softup.co"]
      })

    formSubmitFunction.addToRolePolicy(sendMailPolicy)
    formSubmitFunction.addToRolePolicy(sendMailPolicyE)
  }
}
