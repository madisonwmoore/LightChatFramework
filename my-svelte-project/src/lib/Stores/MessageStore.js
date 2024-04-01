import { writable } from "svelte/store";

export const messageStore = writable([]);

export function postMessage(newMessage) {
  console.log("New Message")
  messageStore.update((messages) => [ ...messages,newMessage]);
}
