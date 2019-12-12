export function parseArtworkUrl(url, dimensions) {
    if (!dimensions) {
        dimensions = 1000;
    }

    return url.replace('{w}', dimensions).replace('{h}', dimensions);
}
