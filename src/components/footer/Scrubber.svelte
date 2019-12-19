<script>
    import { currentPlaybackTime, remainingPlaybackTime } from "../../stores/now-playing-store";
</script>

<style>
    .layout {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
    }

    .progress-bar {
        background: black;
        flex-grow: 1;
        height: 6px;
        border-radius: 10px;
        margin: 0 12px;
    }

    .time {
        font-size: 0.5em;
    }
</style>

<div class="layout">
    <div class="time">{$currentPlaybackTime}</div>
    <div class="time">{$remainingPlaybackTime}</div>
    <div class="time">{$currentPlaybackTime}</div>
    <div class="progress-bar"></div>
    <div class="time">5:45</div>
</div>
