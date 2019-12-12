<script>
    let hovering = false;
</script>

<style>
    .container {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 1.5em;
        color: white;
    }
</style>

<span class="container">
    {#if hovering}
        <i class="fas fa-heart" on:mouseleave={() => hovering = false}></i>
    {:else}
        <i class="far fa-heart" on:mouseenter={() => hovering = true}></i>
    {/if}
</span>
