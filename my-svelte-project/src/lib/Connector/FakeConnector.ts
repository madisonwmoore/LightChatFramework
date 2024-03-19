class FakeConnector {
  constructor() {}

  async start() {}

  onMessage(callback: () => any) {
    callback();
  }

  sendTextMessage = () => {
    console.log("Sending Message");
  };

  getTranscript = () => {};
}

export default FakeConnector;
