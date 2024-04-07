import { writable } from "svelte/store";

export const messageStore = writable([] as Message[]);

export interface Message{
  id:string | number;
  type:"TEXT" | "PICKER" | "FILE" | "CUSTOM",
};

export interface TextMessage extends Message{
  content: string;
}


export function postMessage(newMessage:Message) {
  console.log("New Message");
  messageStore.update((messages) => [ ...messages,newMessage]);
}
