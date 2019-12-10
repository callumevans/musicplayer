<script>
    import Footer from "./components/footer/Footer.svelte";
    import NavBar from "./components/nav/NavBar.svelte";

    document.addEventListener('applemusicready', () => {
        const music = MusicKit.getInstance();
        const res = music.api.library.albums().then((albums) => {
            console.log(albums)
        })
    });
</script>

<style>
    :root {
        --footer-height: 90px;
        --nav-width: 230px;
        --album-art-size: 230px;
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
    }

    .footer {
        grid-area: footer;
    }
</style>

<div class="layout">
    <div class="nav">
        <NavBar />
    </div>
    <div class="content">
        <button data-apple-music-add-to-library="pl.da219c87667b4018968b94c4be8bc793"></button>
        <button data-apple-music-add-to-library="1025210938"></button>
        <button data-apple-music-add-to-library="1107054256" data-apple-music-type="songs"></button>
    </div>
    <div class="footer">
        <Footer />
    </div>
</div>
