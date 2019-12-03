<script>
    import MediaControls from "./MediaControls.svelte";
    import Scrubber from "./Scrubber.svelte";
</script>

<style>
    .layout {
        width: 100%;
        height: 100%;
        display: grid;
        font-size: 2em;
        grid-template-columns: var(--nav-width) 60% auto;
    }

    .song-info {
        background: blue;
        width: var(--nav-width);
        min-width: var(--nav-min-width);
        max-width: var(--nav-max-width);
        align-self: center;
        justify-self: center;
    }

    .controls {
        width: 77%;
        justify-self: right;
        align-self: center;
    }

    .volume {
        background: #15ff16;
        align-self: center;
        justify-self: center;
    }

    .scrubber {
        margin: 0 auto;
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
