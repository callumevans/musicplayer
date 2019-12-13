<script>
    import ThumbControls from "./thumb-controls/ThumbControls.svelte";
    export let mediaObject;
    let hovering = false;
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
        background: url({mediaObject.artwork});
        background-size: cover;
        background-repeat: no-repeat;"
     on:mouseenter={() => hovering = true}
     on:mouseleave={() => hovering = false}
    >

    {#if hovering}
        <div class="media-overlay">
            <ThumbControls mediaObject="{mediaObject}" />
        </div>
    {/if}

</div>
