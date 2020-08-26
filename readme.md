# Infrastructure setup

### Frontend

To update the site content, aws cdk s3 constructs takes care by deploying the new build in the configured bucket.

### Ghost Server

To make volume snapshots and back up the server data go in aws console > EC2 > Elastic Block Store > Snapshots > Create Snapshot > Select the Volume or Instance for the snapshot > Create