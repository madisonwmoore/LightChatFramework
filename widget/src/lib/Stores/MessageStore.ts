import { writable, get } from "svelte/store";

export interface Message {
  [x: string]: any;
  id: string | number;
  datetime: number;
  type: MessageType;
  status?: string;
  variant?: "incoming" | "outgoing";
}

let messages: Message[] = [];
export const messageStore = writable(messages);

messageStore.subscribe((val) => {
  messages = val;
});

export type MessageType = "TEXT" | "PICKER" | "CUSTOM";

export interface TextMessageContent {
  sender?: string;
  message: string;
  contentType: "text";
  language?: string;
  footer?: any;
}

export interface TextMessage extends Message {
  content: TextMessageContent;
}

/**
 *
 * @param newMessage
 */
export function postMessage(newMessage: Message) {
  console.log("New Message");
  messageStore.update((messages) => [...messages, newMessage]);
}

/**
 *
 * @param id
 * @param update
 */
export function updateMessage(id: string | number, update: any) {
  console.log(messageStore);

  messageStore.update((val: any) => {
    console.log(val);
    val.push([
      {
        id: 324324,
        datetime: 23423423,
        content: {
          sender: "bob",
          message: "TEst",
          contentType: "text",
        },
        type: "TEXT",
      } as TextMessage,
    ] as Message[]);
    return val;
  });

  console.log(messages as any);
}
