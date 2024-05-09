import FakeConnector from "../Connector/FakeConnector";

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
      port.postMessage(e.data.payload);
    });
  });

  port.start();
};
