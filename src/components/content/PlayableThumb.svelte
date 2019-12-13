<script>
    import { onMount } from "svelte";
    import ThumbControls from "./thumb-controls/ThumbControls.svelte";
    import { playMedia, pause, skip, back } from "../../media-manager";
    import { currentMediaIdentifier, isPlaying } from "../../stores/now-playing-store";

    let hovering = false;

    export let identifier = null;

    export let mediaItemId;
    export let mediaType;
    export let mediaArtwork;

    async function playCallback() {
        if (isThumbPlaying() === false) {
            await playMedia(mediaItemId, mediaType);
        } else {
            await pause();
        }
    }

    function isThumbPlaying() {
        return ($isPlaying && $currentMediaIdentifier === identifier);
    }
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
        background: url({mediaArtwork});
        background-size: cover;
        background-repeat: no-repeat;"
     on:mouseenter={() => hovering = true}
     on:mouseleave={() => hovering = false}
    >

    {#if hovering}
        <div class="media-overlay">
            <ThumbControls
                    playCallback="{playCallback}"
                    isPlaying="{isThumbPlaying}"
            />
        </div>
    {/if}

</div>
