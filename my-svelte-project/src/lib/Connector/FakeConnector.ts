import { writable } from "svelte/store";
import { messageStore, postMessage } from "../Stores/MessageStore";

class FakeConnector {
  messageCallbacks;
  constructor() {
    console.log("Constructor");
  }

  async start() {
    console.log("Connection Started");
  }

  onMessage(callback: () => any) {
    messageStore.subscribe(callback);
  }

  sendTextMessage = (message: string) => {
    console.log("Sending Message");
    postMessage(message);
    this.handleIncomingMessage(message);
  };

  private handleIncomingMessage=(message)=>{
    postMessage('You said:"'+message+'"')
  }

  getTranscript = () => {
    return;
  };

  disconnect = () => {
    console.log("Disconnecting");
    //alert('Disconnecting')
  };
}

export default FakeConnector;
