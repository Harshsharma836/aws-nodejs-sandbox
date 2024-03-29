# Using AWS S3 with Node.js

AWS S3 (Simple Storage Service) is an object storage service that allows you to store and retrieve large amounts of data. This guide will walk you through setting up S3 with Node.js, including creating an IAM user, configuring permissions, and interacting with S3 buckets using the AWS SDK for Node.js.

## Prerequisites
- AWS account
- Node.js installed
- AWS SDK for Node.js installed (`npm install aws-sdk`)

## Step 1: Creating an IAM User
1. Sign in to your AWS Management Console.
2. Go to the IAM dashboard.
3. Click on "Users" in the left navigation pane.

   ![Screenshot (159)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/a0c633e7-d337-4ceb-abca-c055c0aafed0)

5. Click on "Add user" and enter a username.

   ![Screenshot (161)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/204597ec-294a-44bc-9f3c-6052d0a0f72f)

7. Select "Programmatic access" as the access type.
8. Click on "Next: Permissions".
9. Attach policies that grant access to S3. You can create a new policy or choose an existing one.
10. Click on "Next: Tags" and add any tags if needed.
11. Click on "Next: Review" and then "Create user".
12. Note down the access key ID and secret access key for the IAM user.
    
![Screenshot (163)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/ca0514ca-4370-427a-b51e-e96ff29d848c)

## Step 2: Creating an S3 Bucket
1. Sign in to your AWS Management Console.
2. Go to the S3 dashboard.
3. Click on "Create bucket".
  
   ![Screenshot (169)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/bf82791b-6fa1-4726-bcee-947ddc4f2d01)

6. Enter a unique bucket name, select a region, and click "Next".
7. Configure options like versioning, logging, and tags (optional), and click "Next".
8. Set permissions for the bucket (optional), and click "Next".
9. Review the configuration and click "Create bucket".
    
![Screenshot (170)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/4021e0c4-1e77-4b3d-8e63-110945ff2791)

## Step 3: Configuring AWS SDK for Node.js
1. Install the AWS SDK for Node.js if you haven't already (`npm install aws-sdk`).
2. Configure the SDK with the IAM user's access key ID and secret access key:

   ```javascript
   const AWS = require('aws-sdk');

   AWS.config.update({
     accessKeyId: 'YOUR_ACCESS_KEY_ID',
     secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
   });

## Now In AWS there is Policy :

In AWS S3 policies, "Principal" refers to the AWS account, IAM user, IAM role, federated user, or AWS service to which the policy is applied. "Action" refers to the specific actions or operations that the principal is allowed or denied to perform on the S3 resources.

### Example

Suppose you want to create a policy that allows a specific IAM user to read objects from a particular S3 bucket named "example-bucket". Here's a simplified policy explaining the "Principal" and "Action":

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::123456789012:user/example-user"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::example-bucket/*"
        }
    ]
}
```
### Explanation
1. Effect: "Allow" indicates that the specified actions are allowed.
2. Principal: Specifies the IAM user (arn:aws:iam::123456789012:user/example-user) to which the policy applies.
3. Action: The action s3:GetObject allows the IAM user to retrieve (read) objects from the S3 bucket.
4. Resource: Defines the specific S3 resource to which the policy applies, in this case, the objects within the bucket "example-bucket".

![Screenshot (173)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/7b6d7140-f51a-4b43-ae73-35a80290bee6)
