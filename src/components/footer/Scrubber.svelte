<script>
    import { currentPlaybackTime, currentPlaybackDuration, currentPlaybackProgress } from "../../stores/now-playing-store";
    import { setPlaybackPosition } from "../../media-manager";

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
        await setPlaybackPosition(newTime)
    }
</script>

<style>
    .layout {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
    }

    .scrubber-container {
        flex-grow: 1;
        margin: 0 12px;
        justify-content: center;
        align-items: center;
        display: flex;
        position: relative;
    }

    .scrubber {
        -webkit-appearance: none;
        width: 100%;
        appearance: none;
        outline: none;
        background: #d3d3d3;
        height: 6px;
        border-radius: 5px;
        cursor: pointer;
    }

    .scrubber-progress {
        background: #8e8e8e;
        position: absolute;
        height: 6px;
        left: 0;
        right: 0;
        border-radius: 5px;
        pointer-events: none;
    }

    .scrubber:hover::-webkit-slider-thumb {
        -webkit-appearance: none;
        display: block;
        z-index: 99;
        position: relative;
    }

    .scrubber::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: #000000;
        border-radius: 50%;
        width: 11px;
        height: 11px;
        display: none;
    }

    .scrubber::-webkit-slider-thumb:hover {
        -webkit-appearance: none;
        background: #000000;
    }

    .time {
        font-size: 0.5em;
    }
</style>

<div class="layout">
    <div class="time">{secondsToMinutes($currentPlaybackTime)}</div>

    <div class="scrubber-container">
        <span class="scrubber-progress" style="{'width:' + $currentPlaybackProgress + '%'}" />
        <input  on:input={(event) => handleScrubChange(event.target.value)}
                on:mousedown="{() => isDragging = true}"
                on:mouseup="{() => isDragging = false}"
                class="scrubber"
                type="range"
                min="0"
                max="{$currentPlaybackDuration}"
                value="{!isDragging ? $currentPlaybackTime : dragValue}" />
    </div>
    <div class="time">{secondsToMinutes($currentPlaybackDuration)}</div>
</div>
