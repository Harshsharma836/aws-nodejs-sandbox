exports.handler = async (event) => {
    try {
      for (const record of event.Records) {
        const messageBody = JSON.parse(record.body);
        console.log('Processing message:', messageBody);
      }
      return { statusCode: 200, body: 'Message processed successfully' };
    } catch (error) {
      console.error('Error processing message:', error);
      return { statusCode: 500, body: 'Error processing message' };
    }
  };
  