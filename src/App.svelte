<script>
    import Footer from "./components/footer/Footer.svelte";
    import NavBar from "./components/nav/NavBar.svelte";
    import ContentArea from "./components/content/ContentArea.svelte";

    let isLoaded = false;

    document.addEventListener('applemusicready', () => {
        isLoaded = true;
    });
</script>

<style>
    :root {
        --footer-height: 90px;
        --nav-width: 230px;
        --album-art-size: 230px;
        --album-thumb-grid-size: 200px;
    }

    .layout {
        height: 100%;
        display: grid;
        grid-template:
            'nav content'
            'footer footer';

        grid-template-columns: var(--nav-width) auto;
        grid-template-rows: calc(100% - var(--footer-height)) auto;
    }

    .nav {
        background: #49bcff;
        grid-area: nav;
    }

    .content {
        grid-area: content;
        overflow-y: scroll;
        background: pink;
        display: block;
        overflow-x: hidden;
    }

    .footer {
        grid-area: footer;
    }
</style>

{#if !isLoaded}
<div>LOADING...</div>
{:else}
<div class="layout">
    <div class="nav">
        <NavBar />
    </div>
    <div class="content">
        <ContentArea />
    </div>
    <div class="footer">
        <Footer />
    </div>
</div>
{/if}
