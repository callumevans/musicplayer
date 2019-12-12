<script>
    import { onMount } from "svelte";
    import { parseArtworkUrl } from "../../lib/artwork"

    export let album;

    let hovering = false;

    function enter() {
        hovering = true;
    }

    function leave() {
        hovering = false;
    }

    console.debug('AlbumThumb', album)
</script>

<style>
    .thumb {
        width: 100%;
        height: 100%;
    }

    .media-overlay {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        cursor: pointer;
    }
</style>

<div class="thumb"
     style="
        background: url({parseArtworkUrl(album.attributes.artwork.url)});
        background-size: cover;
        background-repeat: no-repeat;"
     on:mouseenter={() => hovering = true}
     on:mouseleave={() => hovering = false}
    >

    {#if hovering}
        <div class="media-overlay"></div>
    {/if}

</div>
