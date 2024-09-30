import { writable } from "svelte/store";

type AppState="UNCONNECTED" | "CONNECTED"


export const appStateStore = writable<AppState>("UNCONNECTED");