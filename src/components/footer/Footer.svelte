<script>
    import MediaControls from "./MediaControls.svelte";
    import Scrubber from "./Scrubber.svelte";
    import { theme } from "../../stores/config-store";
</script>

<style>
    .layout {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: var(--nav-width) 4fr 1fr;
        font-size: 2em;
    }

    .song-info {
        background: blue;
        align-self: center;
        width: var(--nav-width);
    }

    .controls {
        width: 75%;
        min-width: 300px;
        align-self: center;
        justify-self: center;
    }

    .scrubber {
        margin: 0 auto;
        height: 20px;
    }

    .volume {
        background: #15ff16;
        align-self: center;
    }

</style>

<div class="layout {$theme.footer}">
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
