import {
    currentItemId,
    currentAlbum,
    currentArtwork,
    isPlaying,
    currentArtist,
    currentSong,
    currentMediaIdentifier,
} from "./stores/now-playing-store";

import MediaObjectType from "./media-object-type";

let music;
let queue = null;
let playing = false;

export function pause() {
    music.pause();
    setIsPlaying(false);
}

export async function back() {
    await music.skipToPreviousItem();
    setIsPlaying(true);
}

export async function skip() {
    await music.skipToNextItem();
    setIsPlaying(true);
}

export async function start() {
    await music.play();
    setIsPlaying(true);
}

export async function playMedia(itemId, type) {
    switch (type) {
        case MediaObjectType.Album:
            await playAlbum(itemId);
            break;
    }
}

async function playAlbum(itemId) {
    queue = await music.setQueue({ album: itemId });
    await start();
}

function setIsPlaying(value) {
    isPlaying.set(value);
    playing = value;
}

function mediaItemDidChangeHandler(event) {
    console.debug('mediaItemDidChange', event);
    currentMediaIdentifier.set(event.item.albumInfo);
    currentItemId.set(event.item.id);
    currentArtwork.set(event.item.artworkURL);
    currentArtist.set(event.item.artistName);
    currentSong.set(event.item.title);
}

(() => {
    document.addEventListener('musickitloaded', function() {
        MusicKit.configure({
            developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1MTDJSNzhQTk4ifQ.eyJpYXQiOjE1NzU5Mzg2OTgsImV4cCI6MTU5MTQ5MDY5OCwiaXNzIjoiSkw2WDZLS0FUUSJ9.E9YymtMP3X9iF7UpcCFwZd4IruBG87qSQ2oVq2WzGmUW9RhgYZ4kRdw6sFdgoacSI1knduvVjclDoknG0lgaLg',
            app: {
                name: 'My Cool Web App',
                build: '0.0.1'
            },
            bitrate: MusicKit.PlaybackBitrate.HIGH,
            suppressErrorDialog: true,
        });

        music = MusicKit.getInstance();

        music.addEventListener('mediaItemDidChange', mediaItemDidChangeHandler);

        document.dispatchEvent(new CustomEvent('applemusicready'));
    });
})();
