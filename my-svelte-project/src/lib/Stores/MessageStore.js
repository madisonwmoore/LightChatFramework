import { writable } from "svelte/store";

export const messageStore = writable([]);

export function postMessage(newMessage) {
  messageStore.update((messages) => [ ...messages,newMessage]);
}
