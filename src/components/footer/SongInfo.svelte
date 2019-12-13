<script>
    import { currentSong, currentArtist } from "../../stores/now-playing-store";
</script>

<style>
    .layout {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
        padding: 0 15px;
    }

    .song-title {
        max-width: initial;
        font-weight: bold;
        text-overflow: fade;
        white-space: nowrap;
        font-size: 1.5em;
    }

    .artist-name {
        font-size: 1.2em;
    }
</style>

<div class="layout">
    {#if $currentSong && $currentArtist}
        <span class="song-title">{$currentSong}</span>
        <span class="artist-name">{$currentArtist}</span>
    {/if}
</div>
