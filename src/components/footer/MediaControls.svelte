<script>
    import { isSongPlaying } from "../../stores/now-playing-store";
    import { setTheme, themes } from "../../stores/config-store";

    function setIsPlaying(value) {
        setTheme(themes.dark)
        isSongPlaying.set(value);
    }
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

    .small-button {
        font-size: 0.6em;
    }
</style>

<div class="layout">
    <div class="buttons">

        <i class="fas fa-step-backward small-button"></i>

        {#if $isSongPlaying}
            <i class="far fa-pause-circle" on:click={() => setIsPlaying(false)}></i>
        {:else}
            <i class="far fa-play-circle" on:click={() => setIsPlaying(true)}></i>
        {/if}

        <i class="fas fa-step-forward small-button"></i>
    </div>
</div>
