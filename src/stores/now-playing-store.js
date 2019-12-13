import { writable } from "svelte/store";

export const currentItemId = writable(null);
export const isPlaying = writable(false);
export const currentAlbum = writable(null);
export const currentArtwork = writable(null);
export const currentArtist = writable(null);
export const currentSong = writable(null);
export const currentMediaIdentifier = writable(null);
