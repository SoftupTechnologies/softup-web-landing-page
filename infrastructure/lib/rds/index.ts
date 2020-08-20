import * as cdk from '@aws-cdk/core';
import * as rds from '@aws-cdk/aws-rds';
import * as ec2 from '@aws-cdk/aws-ec2';

export interface RdsInfrastructureProps {
  projectName: string,
  dbMasterUserName: string,
  dbMasterUserPassword?: string,
  vpc: ec2.Vpc,
  databaseName: string,
  ingressSgs?: ec2.SecurityGroup[],
  dbPort?: number,
  dbSubnets?: ec2.ISubnet[],
  publicAccessible?: boolean,
  dbEngine?: rds.IInstanceEngine,
}

export class RdsInfrastructure extends cdk.Construct {
  public readonly instance: rds.DatabaseInstance;

  constructor(scope: cdk.Construct, id: string, props: RdsInfrastructureProps) {
    super(scope, id);

    const vpcPlacement: any = {};

    if (props.publicAccessible) {
      vpcPlacement.subnetType = ec2.SubnetType.PUBLIC;
    } else if (props.dbSubnets) {
      vpcPlacement.subnets = props.dbSubnets;
    }

    const defaultSg = new ec2.SecurityGroup(this, 'DefaultSgForVpcAddresses', {
      vpc: props.vpc,
      securityGroupName: 'Connections from vpc',
    });

    defaultSg.addIngressRule(
      ec2.Peer.ipv4(props.vpc.vpcCidrBlock),
      ec2.Port.tcp(props.dbPort || 5432),
    );

    const ingressSgs = props.ingressSgs || [];

    this.instance = new rds.DatabaseInstance(this, 'RdsDbInstance', {
      engine: props.dbEngine || rds.DatabaseInstanceEngine.POSTGRES,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      masterUsername: props.dbMasterUserName,
      masterUserPassword: new cdk.SecretValue(props.dbMasterUserPassword),
      vpc: props.vpc,
      databaseName: props.databaseName,
      instanceIdentifier: `${props.projectName}-db-instance}`,
      allocatedStorage: 5,
      port: props.dbPort || 5432,
      backupRetention: cdk.Duration.days(1),
      vpcPlacement,
      deletionProtection: true,
      securityGroups: [defaultSg, ...ingressSgs],
    });
  }
}