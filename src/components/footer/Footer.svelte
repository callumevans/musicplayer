<script>
    import MediaControls from "./MediaControls.svelte";
    import Scrubber from "./PlaybackProgress.svelte";
    import { theme } from "../../stores/config-store";
    import SongInfo from "./SongInfo.svelte";
    import Volume from "./Volume.svelte";
</script>

<style>
    .layout {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: minmax(var(--nav-width), 1.3fr) 4fr 1fr;
    }

    .song-info {
        height: 100%;
        width: 100%;
        align-self: center;
        overflow: hidden;
        font-size: 0.7em;
        line-height: 2em;
    }

    .controls {
        width: 84%;
        min-width: 300px;
        align-self: center;
        justify-self: center;
    }

    .scrubber {
        margin: 0 auto;
        height: 20px;
    }

    .fade {
        display: block;
        width: 60px;
        height: 100%;
        justify-self: flex-end;
        position: relative;
        top: calc(var(--footer-height) * -1);
        float: right;
    }
</style>

<div class="layout {$theme.footer}">
    <div class="song-info">
        <SongInfo />
        <div class="fade {$theme.fade}" />
    </div>
    <div class="controls">
        <MediaControls />
        <div class="scrubber">
            <Scrubber />
        </div>
    </div>
    <div>
        <Volume />
    </div>
</div>
