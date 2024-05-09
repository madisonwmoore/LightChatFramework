import FakeConnector from "../Connector/FakeConnector";
import { Message, TextMessage } from "../Stores/MessageStore";
import { v4 as uuidv4 } from "uuid";

self.connections = [];
self.connector;

const handleMessages = () => {};

/**
 * When connecting to a web worker
 */
onconnect = (e) => {
  const port: MessagePort = e.ports[0];

  if (self.connections.length < 1) {
    self.connector = new FakeConnector();
  }

  self.connections.push(port);

  port.addEventListener("message", (e) => {
    console.log(e);
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    self.connections.forEach((port: MessagePort) => {
      const response:TextMessage={
        id: uuidv4(),
        datetime: 0,
        type: "TEXT",
        variant:'outgoing',
        content: e.data.payload
      }
      port.postMessage(response);
    });

    setTimeout(()=>{
      self.connections.forEach((port: MessagePort) => {
        const response:TextMessage={
          id: uuidv4(),
          datetime: 0,
          type: "TEXT",
          variant:'incoming',
          content: "You Said: "+e.data.payload as string
        }
        port.postMessage(response);
      });
    },1000)


  });

  port.start();
};
