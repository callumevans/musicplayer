<script>
    import Footer from "./components/footer/Footer.svelte";
    import NavBar from "./components/nav/NavBar.svelte";
</script>

<style>
    :root {
        --footer-height: 90px;
        --nav-width: 230px;
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
    }

    .footer {
        background: rgba(255, 1, 0, 0.6);
        backdrop-filter: blur(4px);
        grid-area: footer;
    }
</style>

<div class="layout">
    <div class="nav">
        <NavBar />
    </div>
    <div class="content">

    </div>
    <div class="footer">
        <Footer />
    </div>
</div>
