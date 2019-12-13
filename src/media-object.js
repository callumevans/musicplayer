import { MediaObjectType } from "./media-object-type";

export default class MediaObject {
    constructor(item) {
        this.id = item.id;
        this.type = this.parseType(item.attributes.playParams);
        console.log(item)
        this.artwork = this.parseArtworkUrl(item.attributes.artwork.url);
    }

    parseType(playParams) {
        switch (playParams.kind) {
            case 'album':
                return MediaObjectType.Album;
        }
    }

    parseArtworkUrl(url, dimensions = 1000) {
        return url.replace('{w}', dimensions).replace('{h}', dimensions);
    }
}
