import { writable } from "svelte/store";
import Connector from "../Connector/Connector";

// function createConnector() {
//   const fakeConnector = new Connector();
  

//   return connection;
// }

export const connector = writable<undefined | Connector>(undefined);

// export const connector = createConnector();
