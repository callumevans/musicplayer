<script>
    import Footer from "./components/footer/Footer.svelte";
    import NavBar from "./components/nav/NavBar.svelte";
</script>

<style>
    :root {
        --footer-height: 90px;
        --nav-min-width: 150px;
        --nav-max-width: 350px;
        --nav-width: 14vmax;
    }

    .layout {
        height: 100%;
        display: flex;
    }

    .nav {
        width: var(--nav-width);
        max-width: var(--nav-max-width);
        min-width: var(--nav-min-width);
        margin-bottom: var(--footer-height);
        background: #49bcff;
    }

    .content {
        flex: 1;
        min-width: 370px;
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: var(--footer-height);
        background: rgba(255, 1, 0, 0.6);
        backdrop-filter: blur(4px);
    }
</style>

<div class="layout">
    <div class="nav">
        <NavBar />
    </div>
    <div class="content"></div>
</div>
<div class="footer">
    <Footer />
</div>
