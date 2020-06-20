const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
 
const assistant = new AssistantV1({
  authenticator: new IamAuthenticator({ apikey: '7Ah8SBcCL8kwKnNfbaGlufdt2ld3NpEaCQROttaplkjf' }),
  url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/4cfc220c-656e-4ee8-b9e3-69e788cd1d0f',
  version: '2020-06-19'
});
 
exports.getMessage = body =>
  new Promise((resolve, reject) => {
    assistant.message(
      {
        workspaceId: '94b4fc07-a5ca-4866-b419-24d9e7ab319d',
        input: { text: body.input }
      },
      function(err, response) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });