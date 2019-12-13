import { writable } from "svelte/store";

export const currentMedia = writable(null);
export const isPlaying = writable(false);
