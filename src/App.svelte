<script>
    import Footer from "./components/footer/Footer.svelte";
    import NavBar from "./components/nav/NavBar.svelte";
</script>

<style>
    :root {
        --footer-height: 90px;
        --nav-min-width: 240px;
        --nav-max-width: 280px;
    }

    .layout {
        height: 100%;
        display: flex;
    }

    .nav {
        flex: 1;
        flex-basis: auto;
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
        padding: 0 30px;
        background: rgba(255, 1, 0, 0.6);
        backdrop-filter: blur(4px);
    }
</style>

<div class="layout">
    <div class="nav">
        <NavBar />
    </div>
    <div class="content">d</div>
</div>
<div class="footer">
    <Footer />
</div>
