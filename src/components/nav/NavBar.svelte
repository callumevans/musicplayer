<script>
    import User from "./User.svelte";
    import NowPlayingArt from "./NowPlayingArt.svelte";
</script>
<style>
    .layout {
        height: 100%;
        display: grid;
        grid-template-rows: 120px auto var(--nav-width);
    }
</style>

<div class="layout">
    <User/>
    <div></div>
    <NowPlayingArt />
</div>
