const AWS = require('./config');
const sqs = new AWS.SQS();

const QUEUE_URL = process.env.QUEUE_URL;

const sendMessage = async (messageBody) => {
  const params = {
    MessageBody: JSON.stringify(messageBody),
    QueueUrl: QUEUE_URL,
  };

  try {
    const result = await sqs.sendMessage(params).promise();
    console.log(`Message sent: ${result.MessageId}`);
  } catch (error) {
    console.error(`Error sending message: ${error.message}`);
  }
};

const message = {
  id: '1',
  name: 'Harsh',
  email: 'harsh@example.com',
};

sendMessage(message);
