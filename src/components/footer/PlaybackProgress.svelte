<script>
    import {
        currentPlaybackTime,
        currentPlaybackDuration,
        currentPlaybackProgress
    } from "../../stores/now-playing-store";

    import {setPlaybackPosition} from "../../media-manager";
    import Scrubber from "../scrubber/Scrubber.svelte";

    let isDragging = false;
    let dragValue = 0;

    function secondsToMinutes(time) {
        if (!time) {
            return '00:00';
        }

        let minutes = Math.floor(time / 60);
        let seconds = time - minutes * 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        return `${minutes}:${seconds}`;
    }

    async function handleScrubChange(newTime) {
        await setPlaybackPosition(newTime);
    }
</script>

<style>
    .layout {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
    }

    .time {
        font-size: 0.5em;
    }
</style>

<div class="layout">
    <div class="time">{secondsToMinutes($currentPlaybackTime)}</div>
    <Scrubber onChange="{handleScrubChange}" min="0" max="{$currentPlaybackDuration}" progress="{$currentPlaybackTime}" />
    <div class="time">{secondsToMinutes($currentPlaybackDuration)}</div>
</div>
