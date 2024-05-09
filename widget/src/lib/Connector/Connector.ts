import FakeConnector from "./FakeConnector";
import EventBus from "./EventBus";
import { Message, TextMessage } from "../Stores/MessageStore";
import { messageStore, postMessage as pm } from "../Stores/MessageStore";

class Connector {
  worker: SharedWorker | undefined = undefined;
  fallback: FakeConnector | undefined = undefined;

  constructor() {
    try {
      console.log("Creating Connector");
      if (window.SharedWorker) {
        this.worker = new SharedWorker(
          new URL("../web_worker/worker.ts", import.meta.url),
          { type: "module" }
        );
        this.worker.port.start();
        this.worker.port.onmessage = (ev: MessageEvent) => {
          console.log(ev);
          const messageObject: Message | TextMessage = {
            id: Math.random(),
            type: "TEXT",
            datetime: Date.now(),
            content: { message: "You said " + ev.data },
          };
          pm(messageObject);
        };
        this.worker.onerror = () => {
          console.error("Webworker Reported Error");
          this.handleError();
        };
      } else {
        throw new Error("Shared Worker Not Supported");
      }
    } catch (err) {
      console.error(err);
      console.log("Using Fallback");
      this.handleError();
    }
  }

  /**
   *
   */
  private handleError = () => {
    try {
      console.log("Using Fallback");
      this.worker = undefined;
      this.fallback = new FakeConnector();
    } catch (err) {
      console.error("Can't Connect");
    }
  };

  onMessage = (callback: any) => {
    if (this.worker) {
      return
    } else {
      this.fallback?.onMessage(callback);
    }
  };

  onConnected = (callback: any) => {};

  /**
   *
   * @param message
   */
  sendTextMessage = (message: string) => {
    console.log("Send Text Messaage: " + message);
    try {
      if (this.worker) {
        this.worker.port.postMessage({ event: "message", payload: message });
      } else {
        this.fallback?.sendTextMessage(message);
      }
    } catch (err) {
      console.error(err);
    }
  };
}

export default Connector;
