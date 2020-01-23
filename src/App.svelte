<script>
    import Footer from "./components/footer/Footer.svelte";
    import NavBar from "./components/nav/NavBar.svelte";
    import ContentArea from "./components/content/ContentArea.svelte";
    import { theme } from "./stores/config-store";

    let isLoaded = false;

    document.addEventListener('applemusicready', () => {
        isLoaded = true;
    });
</script>

<style>
    :root {
        --footer-height: 2.5cm;
        --nav-width: 6cm;
        --album-thumb-grid-size: 5.2cm;
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
        grid-area: nav;
    }

    .content {
        grid-area: content;
        overflow-y: scroll;
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
        <div class="nav {$theme.nav}">
            <NavBar />
        </div>
        <div class="content {$theme.content}">
            <ContentArea />
        </div>
        <div class="footer">
            <Footer />
        </div>
    </div>
{/if}
