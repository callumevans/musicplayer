<script>
    import MediaControls from "./MediaControls.svelte";
    import Scrubber from "./Scrubber.svelte";
</script>

<style>
    .layout {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 2em;
    }

    .song-info {
        background: blue;
        flex-grow: 1;
        min-width: var(--nav-min-width);
        max-width: var(--nav-max-width);
    }

    .controls {
        flex-grow: 1;
        max-width: 1250px;
    }

    .volume {
        background: #15ff16;
        justify-self: right;
    }

    .scrubber {
        margin: 0 auto;
        width: 90%;
        height: 20px;
    }
</style>

<div class="layout">
    <div class="song-info">
        Now Playing
    </div>

    <div class="controls">
        <MediaControls />
        <div class="scrubber">
            <Scrubber />
        </div>
    </div>

    <div class="volume">
        0% -----> 100%
    </div>
</div>
