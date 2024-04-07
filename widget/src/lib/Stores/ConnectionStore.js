import { readable } from "svelte/store";
import FakeConnector from "../Connector/FakeConnector";

function createConnector() {
  const fakeConnector = new FakeConnector();
  const connection = readable(fakeConnector);

  return connection;
}

export const connector = createConnector();
