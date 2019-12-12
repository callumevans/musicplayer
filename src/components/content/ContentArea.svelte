<script>
    import { onMount } from "svelte";
    import AlbumThumb from "./AlbumThumb.svelte";

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
        <AlbumThumb album="{album}" />
    {/each}
</div>
