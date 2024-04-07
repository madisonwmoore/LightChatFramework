import { writable } from "svelte/store";
import {
  messageStore,
  postMessage,
  type Message,
  type TextMessage,
} from "../Stores/MessageStore";
import { registerServiceWorker } from "../ServiceWorker/serviceworker";

class FakeConnector {
  // messageCallbacks:any[];
  constructor() {
    console.log("Constructor");
    registerServiceWorker();
  }

  async start() {
    console.log("Connection Started");
  }

  onMessage(callback: (message: Message) => any) {
    messageStore.subscribe((value: Message[]) => callback(value[value.length]));
  }

  sendTextMessage = (message: string) => {
    // navigator.serviceWorker.ready.then((registration) => {
    //   registration.active.postMessage(
    //     "Test message sent immediately after creation"
    //   );
    // });
    console.log("Sending Message");
    const messageObject: Message = {
      id: "",
      type: "TEXT",
    };
    postMessage(messageObject);
    this.handleIncomingMessage(message);
  };

  private handleIncomingMessage = (message: Message) => {
    const messageObject: Message | TextMessage = {
      id: "3",
      type: "TEXT",
      content: (message as TextMessage)?.content,
    };
    postMessage(messageObject);
  };

  getTranscript = () => {
    return;
  };

  disconnect = () => {
    console.log("Disconnecting");
    //alert('Disconnecting')
  };
}

export default FakeConnector;
