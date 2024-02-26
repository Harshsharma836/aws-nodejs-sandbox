# AWS Lambda Project 

This project demonstrates how to create AWS Lambda functions using Node.js and AWS API Gateway.

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.

## Usage

1. **Login to the AWS Console:**

![Screenshot (156)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/9485583e-0081-41c0-9c01-650dc9470726)


3. **Go to the AWS Lambda service:**
   
![Screenshot (150)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/6b76c7ad-7f63-4365-98ec-812ece571960)

![Screenshot (151)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/11b00f50-482e-45c8-b3da-cddc257050f5)

4. **Create a new Lambda function and name it:**

![Screenshot (152)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/07d20246-d811-49d6-bfa8-fb5255ffdee7)

5. **Add a trigger, such as API Gateway, and configure it:**
   
![Screenshot (154)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/898ec169-84da-431f-9dad-7a768367e736)

![Screenshot (155)](https://github.com/Harshsharma836/aws-nodejs-sandbox/assets/70514943/c34f654b-8186-480d-ad64-c7868e0737bb)

6. Save the Lambda function.

## AWS Lambda Functions

### Hello Function

This function returns a simple "Hello, World!" message.

```yaml
functions:
  ApexStackHelloFn:
    handler: hello.handler
    events:
      - httpApi:
          path: /hello
          method: GET
```

### PS
#### For a better understanding of the project, check the repository and review the code.
