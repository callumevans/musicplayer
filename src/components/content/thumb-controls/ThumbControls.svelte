<script>
    import PlayThumbControl from "./PlayThumbControl.svelte";
    import LoveThumbControl from "./LoveThumbControl.svelte";
    import EllipsisThumbControl from "./EllipsisThumbControl.svelte";

    export let playCallback;
    export let isPlaying;
</script>
<style>
    .layout {
        width: 100%;
        height: 100%;
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
    }

</style>

<div class="layout">
    <LoveThumbControl />
    <PlayThumbControl isPlaying="{isPlaying}" playCallback="{playCallback}" />
    <EllipsisThumbControl />
</div>
