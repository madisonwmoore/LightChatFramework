import FakeConnector from "../Connector/FakeConnector";

self.connections = [];
self.connector;

onconnect = (e) => {
  const port = e.ports[0];

  self.connector = new FakeConnector();

  port.addEventListener("message", (e) => {
    console.log(e);
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
