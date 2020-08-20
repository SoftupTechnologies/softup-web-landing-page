#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InfrastructureStack } from '../lib/infrastructure-stack';
import { GhostServerStack } from '../lib/infrastructure-stack';

const app = new cdk.App();
// new InfrastructureStack(app, 'SoftupWeb-V3', {
//   env: {
//     region: 'eu-central-1',
//   },
// });

new GhostServerStack(app, 'GhostServer', {
  env: {
    region: 'eu-central-1',
  }
});
