import { currentMedia, isPlaying } from "./stores/now-playing-store";
import { MediaObjectType } from "./media-object-type";

let music;
let queue = null;

export function pause() {
    music.pause();
    isPlaying.set(false);
}

export async function back() {
    await music.stop();
    await music.skipToPreviousItem();
}

export async function skip() {
    await music.stop();
    await music.skipToNextItem();
}

export async function start() {
    await music.play();
    isPlaying.set(true);
}

export async function playMedia(mediaObject) {
    switch (mediaObject.type) {
        case MediaObjectType.Album:
            await playAlbum(mediaObject);
            break;
    }

    currentMedia.set(mediaObject);
}

async function playAlbum(mediaObject) {
    queue = await music.setQueue({ album: mediaObject.id });
    await start();
}

(() => {
    document.addEventListener('musickitloaded', function() {
        MusicKit.configure({
            developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1MTDJSNzhQTk4ifQ.eyJpYXQiOjE1NzU5Mzg2OTgsImV4cCI6MTU5MTQ5MDY5OCwiaXNzIjoiSkw2WDZLS0FUUSJ9.E9YymtMP3X9iF7UpcCFwZd4IruBG87qSQ2oVq2WzGmUW9RhgYZ4kRdw6sFdgoacSI1knduvVjclDoknG0lgaLg',
            app: {
                name: 'My Cool Web App',
                build: '1978.4.1'
            }
        });

        music = MusicKit.getInstance();
        document.dispatchEvent(new CustomEvent('applemusicready'));
    });
})();

