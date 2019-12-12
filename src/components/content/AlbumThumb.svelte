<script>
    import { onMount } from "svelte";
    import { parseArtworkUrl } from "../../lib/artwork"

    export let album;

    console.debug('AlbumThumb', album)

    onMount(async () => {
    });
</script>

<style>
    .thumb {
        width: 100%;
        height: 100%;
    }
</style>

<div class="thumb" style="
    background: url({parseArtworkUrl(album.attributes.artwork.url)});
    background-size: cover;
    background-repeat: no-repeat">
</div>
