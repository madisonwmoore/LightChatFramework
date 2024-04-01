

class FakeConnector {
  constructor() {
    alert('Constructed')
  }

  async start() {
    alert("Started")
  }

  onMessage(callback: () => any) {
    callback();
  }

  sendTextMessage = () => {
    console.log("Sending Message");
  };

  getTranscript = () => {};

  disconnect=()=>{
    alert('Disconnecting')
  }
}

export default FakeConnector;
