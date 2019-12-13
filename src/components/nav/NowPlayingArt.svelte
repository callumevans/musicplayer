<script>
    import { currentArtwork } from "../../stores/now-playing-store";
</script>

<style>
    .fallback {
        background: gray;
    }

    .art {
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>

{#if $currentArtwork}
    <div class="art" style="background-image: url('{$currentArtwork}')" />
{:else}
    <div class="fallback" />
{/if}
