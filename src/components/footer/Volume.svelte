<script>
    import Scrubber from "../scrubber/Scrubber.svelte";
    import { setVolume } from "../../media-manager";

    import { currentVolume } from "../../stores/now-playing-store";

    function onVolumeChange(volume) {
        setVolume(volume / 100);
    }
</script>

<style>
    .layout {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: flex-start;
    }

    .volume-scrubber {
        max-width: 4.5cm;
        width: 90%;
        min-width: 2cm;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div class="layout">
    <div class="volume-scrubber">
        <i class="fas fa-volume-up" />
        <Scrubber onChange="{onVolumeChange}" min="0" max="100" progress="{$currentVolume * 100}" />
    </div>
</div>
