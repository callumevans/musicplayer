import { readable, writable, derived } from "svelte/store";

export const currentItemId = writable(null);
export const isPlaying = writable(false);
export const currentAlbum = writable(null);
export const currentArtwork = writable(null);
export const currentArtist = writable(null);
export const currentSong = writable(null);
export const currentMediaIdentifier = writable(null);

const REFRESH_RATE = 500;

export const currentPlaybackTime = readable(0, (set) => {
    const interval = setInterval(() => {
        set(MusicKit.getInstance().player.currentPlaybackTime);
    }, REFRESH_RATE);

    document.addEventListener('playbackProgressDidChange', (evt) => {
        set(MusicKit.getInstance().player.currentPlaybackTime);
    });

    return function stop() {
        clearInterval(interval);
    };
});

export const currentPlaybackProgress = readable(0, (set) => {
    const interval = setInterval(() => {
        const calc = (MusicKit.getInstance().player.currentPlaybackTime / MusicKit.getInstance().player.currentPlaybackDuration) * 100;
        set(calc || 0);
    }, REFRESH_RATE);

    return function stop() {
        clearInterval(interval);
    };
});

export const currentPlaybackDuration = readable(0, (set) => {
    const interval = setInterval(() => {
        set(MusicKit.getInstance().player.currentPlaybackDuration || 0);
    }, REFRESH_RATE);

    return function stop() {
        clearInterval(interval);
    };
});
