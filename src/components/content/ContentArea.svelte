<script>
    import { onMount } from "svelte";
    import PlayableThumb from "./PlayableThumb.svelte";
    import MediaObjectType from "../../media-object-type";
    import parseArtworkUrl from "../../url-parser";

    let albums = [];

    onMount(async () => {
        albums = await MusicKit.getInstance().api.library.albums();
    });
</script>

<style>
    .layout {
        display: grid;
        height: 100%;
        width: 100%;
        grid-template-columns: repeat(auto-fit, var(--album-thumb-grid-size));
        grid-template-rows: repeat(auto-fit, var(--album-thumb-grid-size));
        grid-gap: 20px;
        padding: 20px;
    }
</style>

<div class="layout">
    {#each albums as album}
        <PlayableThumb
                mediaType="{MediaObjectType.Album}"
                mediaItemId="{album.id}"
                mediaArtwork="{parseArtworkUrl(album.attributes.artwork.url)}"
                identifier="{`${album.attributes.artistName} - ${album.attributes.name}`}"
        />
    {/each}
</div>
