Using AWS S3 with Node.js

AWS S3 (Simple Storage Service) is an object storage service that allows you to store and retrieve large amounts of data. This guide will walk you through setting up S3 with Node.js, including creating an IAM user, configuring permissions, and interacting with S3 buckets using the AWS SDK for Node.js.

Prerequisites
AWS account
Node.js installed
AWS SDK for Node.js installed (npm install aws-sdk)
Step 1: Creating an IAM User
Sign in to your AWS Management Console.
Go to the IAM dashboard.
Click on "Users" in the left navigation pane.
Click on "Add user" and enter a username.
Select "Programmatic access" as the access type.
Click on "Next: Permissions".
Attach policies that grant access to S3. You can create a new policy or choose an existing one.
Click on "Next: Tags" and add any tags if needed.
Click on "Next: Review" and then "Create user".
Note down the access key ID and secret access key for the IAM user.
Step 2: Configuring AWS SDK for Node.js
Install the AWS SDK for Node.js if you haven't already (npm install aws-sdk).

Configure the SDK with the IAM user's access key ID and secret access key:

javascript
Copy code
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
});





