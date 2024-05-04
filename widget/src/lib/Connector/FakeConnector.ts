import {
  postMessage,
  type Message,
  type TextMessage,
} from "../Stores/MessageStore";
import { v4 as uuidv4 } from "uuid";
import EventBus from "./EventBus";


class FakeConnector {
  events: EventBus;
  constructor() {
    console.log("Constructor");
    this.events = new EventBus();
 
    // this.worker=new SharedWorker();
    // this.worker.port.postMessage('Moo');
  }

  async start() {
    console.log("Connection Started");
  }

  onMessage(callback: (message: Message) => any) {
    this.events.sub("message", callback);
  }

  public sendTextMessage = (message: string) => {
    console.log("Sending Message");
    const messageObject: TextMessage = {
      id: "",
      datetime: Date.now(),
      type: "TEXT",
      content: {
        contentType: "text",
        message,
      },
    };
    postMessage(messageObject);
    this.handleIncomingMessage(message);
  };

  private handleIncomingMessage = (message: Message) => {
    const messageObject: Message | TextMessage = {
      id: uuidv4(),
      type: "TEXT",
      datetime: Date.now(),
      content: { message: "You said " + (message as TextMessage)?.content },
    };

    this.events.pub("message", messageObject);
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
