#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InfrastructureStack } from '../lib/infrastructure-stack';
import { GhostServerStack } from '../lib/infrastructure-stack';

const env = {
  region: 'eu-central-1',
}

const app = new cdk.App();
// new InfrastructureStack(app, 'SoftupWeb-V3', {
//   env,
// });

new GhostServerStack(app, 'GhostServer', {
  env,
});
