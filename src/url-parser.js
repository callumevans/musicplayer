export default function parseArtworkUrl(url, dimensions = 1000) {
    return url.replace('{w}', dimensions).replace('{h}', dimensions);
}
