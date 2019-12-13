<script>
    export let isPlaying;
</script>

<style>
    .circle {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 50%;
        border: 1px solid white;
        font-size: 1.3em;
        color: white;
    }

    .circle .offset {
        margin-right: -4px;
    }

    .circle:hover {
        width: 60px;
        height: 60px;
        font-size: 1.4em;
    }
</style>

<span class="circle" on:click>
    {#if isPlaying()}
        <i class="fas fa-pause"></i>
    {:else}
        <i class="fas fa-play offset"></i>
    {/if}
</span>
