import {readable, writable} from "svelte/store";

export const currentItemId = writable(null);
export const isPlaying = writable(false);
export const currentAlbum = writable(null);
export const currentArtwork = writable(null);
export const currentArtist = writable(null);
export const currentSong = writable(null);
export const currentMediaIdentifier = writable(null);

export const currentPlaybackTime = readable(0, (set) => {
    const interval = setInterval(() => {
        set(MusicKit.getInstance().player.currentPlaybackTime);
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});

export const currentPlaybackProgress = readable(0, (set) => {
    const interval = setInterval(() => {
        console.log(MusicKit.getInstance().player.currentPlaybackProgress * 100);
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});

export const currentPlaybackDuration = readable(0, (set) => {
    const interval = setInterval(() => {
        console.log(MusicKit.getInstance().player.nowPlayingItem.duration);
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});
