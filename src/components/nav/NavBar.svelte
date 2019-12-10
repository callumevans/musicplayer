<script>
    import User from "./User.svelte";
</script>
<style>
    .layout {
        height: 100%;
        display: grid;
        grid-template-rows: 120px auto var(--album-art-size);
    }

    .now-playing-art {
        background: palegoldenrod;
    }
</style>

<div class="layout">
    <User/>
    <div></div>
    <div class="now-playing-art"></div>
</div>
