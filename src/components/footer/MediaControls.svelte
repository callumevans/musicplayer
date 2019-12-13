<script>
    import { isPlaying } from "../../stores/now-playing-store";
    import { start, pause, skip, back } from "../../media-manager";
    import { themes } from "../../stores/config-store";
</script>

<style>
    .layout {
        min-width: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 120px;
        padding-bottom: 3px;
        font-size: 1.1em;
    }

    .buttons:hover {
        cursor: pointer;
    }

    .small-button {
        font-size: 0.6em;
    }

    .main-button:hover {
        transform: scale(1.1);
    }
</style>

<div class="layout">
    <div class="buttons">
        <i class="fas fa-step-backward small-button" on:click={back}></i>

        {#if $isPlaying}
            <i class="far main-button fa-pause-circle" on:click={pause}></i>
        {:else}
            <i class="far main-button fa-play-circle" on:click={start}></i>
        {/if}

        <i class="fas fa-step-forward small-button" on:click={skip}></i>
    </div>
</div>
