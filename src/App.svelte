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
        overflow-y: scroll;
        background: pink;
        display: block;
    }

    .footer {
        background: rgba(255, 1, 0, 1);
        grid-area: footer;
    }
</style>

<div class="layout">
    <div class="nav">
        <NavBar />
    </div>
    <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a facilisis nulla, eget elementum dui. Aenean auctor quis dui sed aliquam. Proin ipsum justo, mattis nec enim ut, blandit mattis erat. Proin vestibulum enim id lacinia dapibus. Pellentesque lorem urna, scelerisque sed nisl quis, eleifend vehicula ante. Suspendisse iaculis tellus quis purus luctus aliquam. Cras varius justo nisi, et posuere velit tempus non. Nulla a auctor augue. Fusce blandit pharetra urna ut tristique. Phasellus lacinia iaculis porttitor.

        Nunc convallis tincidunt quam ultrices porta. Nam facilisis vulputate enim quis pretium. Nunc ac ante pellentesque, euismod augue sed, accumsan ex. In eleifend mi ut libero tristique, a pulvinar justo semper. Nunc rutrum metus nec nibh consequat, non imperdiet ante egestas. Nulla facilisis iaculis eros, nec finibus magna condimentum euismod. Maecenas ullamcorper semper leo in bibendum. Vivamus pretium pulvinar nisi, ut porta dolor finibus a.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum luctus neque sed sodales. Duis ipsum arcu, porttitor eu elit id, fermentum tempor enim. Phasellus scelerisque porta ante, quis volutpat nulla ornare sit amet. Integer ornare quam quis eros convallis, vel sollicitudin metus placerat. Phasellus enim enim, sagittis ut tortor sit amet, blandit convallis turpis. Donec commodo sapien ac luctus tempor. Fusce dignissim vel nulla eu pulvinar. Sed blandit libero eu blandit ornare. Sed dolor mauris, ornare id enim ut, maximus egestas lacus. Nunc hendrerit ornare vulputate. Fusce nec vestibulum lacus. Sed ante turpis, lacinia vel magna quis, auctor finibus erat.

        Aliquam fringilla nulla et gravida accumsan. Mauris vel venenatis dolor. Pellentesque ac vulputate metus. Maecenas maximus nulla ut massa venenatis, eget viverra ipsum cursus. Aenean semper, leo efficitur posuere venenatis, lectus sem condimentum magna, eget tempor justo nulla a purus. Phasellus in orci nibh. Phasellus facilisis nunc ac ex pulvinar, sit amet pharetra nisl ultricies. Proin non lobortis tellus. Sed fringilla justo ut magna elementum cursus. Integer non quam commodo, finibus dolor sit amet, luctus nisi.

        Morbi porttitor interdum nulla, et tristique lorem mattis quis. In magna lectus, ultricies id eleifend nec, dignissim id nibh. Mauris a orci non arcu blandit faucibus ac id ex. Proin hendrerit magna sit amet odio tincidunt molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras semper lobortis elit, a maximus ex rhoncus dignissim. Aliquam erat volutpat. Mauris ullamcorper commodo ligula eget dignissim. Aliquam vestibulum dui sapien, in lobortis ante luctus sit amet.

        Nulla consequat dapibus viverra. Nunc quis nisi rhoncus, lobortis nisl eget, sollicitudin lectus. Phasellus id tempus nisi. Pellentesque at massa eu felis tincidunt finibus nec quis magna. Aenean tincidunt commodo tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eu facilisis libero. Nullam convallis tellus velit. Etiam varius ut metus vitae iaculis. Curabitur ac purus nec dolor tempor fermentum. Morbi vehicula risus nec porta malesuada. Donec ut nisl malesuada lorem pharetra porttitor. Aliquam quis vulputate sapien. Sed vestibulum tincidunt sem in euismod.

        Pellentesque id leo rhoncus, tristique metus et, pharetra urna. Aliquam ut eros euismod, tempor augue a, molestie turpis. Donec vulputate turpis et interdum lobortis. Cras at ligula egestas, bibendum tortor sed, varius nunc. Aliquam laoreet erat et nunc elementum, ac vestibulum felis sodales. Quisque tristique, lacus sed laoreet accumsan, quam orci interdum elit, a molestie ante tellus a lacus. In efficitur urna pellentesque nisl lacinia, eu finibus nulla consectetur. Aliquam urna libero, faucibus sed dictum at, aliquet id lacus. Aliquam gravida quis lectus eu ultricies. Pellentesque at ullamcorper libero. Cras quis sollicitudin enim. Mauris mollis lacus lacus, in mollis diam rutrum quis. Donec a quam diam. Etiam massa orci, ornare eu consectetur in, dictum vel sapien.

        Cras lectus magna, lacinia at vehicula vel, congue nec nulla. Sed eget iaculis felis. Mauris viverra facilisis felis, vitae pulvinar leo dictum sed. Aenean bibendum tempor enim. Cras pretium, diam vitae volutpat tincidunt, nibh velit suscipit velit, id scelerisque elit orci eget magna. Aenean nec pulvinar lorem, et luctus erat. Nulla facilisi. Praesent sit amet bibendum orci, eu facilisis enim. Nullam bibendum, leo at iaculis fringilla, sapien nisl convallis augue, non sollicitudin sapien sem eget nulla. Proin congue sagittis magna vitae condimentum. Morbi faucibus lectus leo. Quisque sed ipsum facilisis, sollicitudin nisi non, feugiat metus.

        Phasellus at mauris nulla. Vivamus sollicitudin ex turpis, nec tincidunt neque ultrices a. Donec eget mauris turpis. Morbi magna turpis, fringilla tincidunt feugiat sit amet, gravida ut metus. Nam laoreet elit arcu, nec eleifend quam aliquet at. Aenean porta auctor interdum. Mauris suscipit nunc sed dolor dignissim tempus. Sed vel est pellentesque mi lobortis ornare. Sed augue nunc, volutpat vel cursus eu, ornare vel sapien. Maecenas id eros arcu. Donec lorem leo, vestibulum vel luctus quis, tincidunt quis velit. Donec dictum, eros at ultricies dictum, neque orci venenatis est, a elementum est odio a mi.

        Cras non pretium augue, quis rutrum quam. Vestibulum pulvinar eros in vulputate viverra. Mauris ac auctor turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec imperdiet dapibus venenatis. Curabitur sit amet dolor lectus. Aliquam volutpat semper congue. Duis euismod urna eget ante accumsan, quis consequat leo suscipit. Nullam rutrum mi vel metus porta, at sollicitudin tellus venenatis. Proin interdum posuere erat, sit amet posuere erat placerat id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

        Suspendisse potenti. Sed viverra ex vitae pharetra auctor. Donec congue pretium posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt lacus eget orci convallis congue. Vestibulum lobortis et ligula a porttitor. Curabitur diam justo, tempus a euismod quis, rhoncus a orci. Morbi vel est enim. Aliquam vitae gravida sapien. In ut euismod quam, a aliquam nibh. Nullam imperdiet risus at ipsum feugiat blandit. Curabitur iaculis dui a iaculis pharetra. In in congue dui, vel ullamcorper ipsum. Aenean in porta eros, sit amet mollis odio. Aenean a erat nec ligula rhoncus varius sed et augue.

        Proin in ipsum lobortis, feugiat eros nec, imperdiet urna. Maecenas eget mauris vitae ligula pharetra lobortis. Sed luctus nulla a dui sodales interdum. Morbi dignissim interdum nibh eget ullamcorper. Sed maximus ultrices magna, et eleifend tellus dapibus nec. Etiam leo mauris, consectetur semper suscipit at, faucibus quis justo. Etiam nec eleifend lectus. Aenean eleifend, eros id ultrices iaculis, urna nunc fringilla lectus, nec elementum felis sapien quis quam. Ut eu consectetur neque. Aliquam semper auctor tortor quis aliquet. Praesent turpis libero, mattis sit amet congue euismod, auctor in dolor. Cras sed dui nec sapien porta congue. Donec vestibulum posuere risus, a dictum odio viverra in. Nulla lobortis metus non augue vestibulum venenatis. Nunc egestas pharetra scelerisque. Quisque mollis dignissim odio, vitae pellentesque arcu varius in.

        Quisque eget augue ac velit aliquam accumsan. Vestibulum dapibus fermentum porta. In tristique diam diam, et vulputate lorem elementum ac. Etiam fermentum, leo eget accumsan rhoncus, nunc tortor finibus nunc, vitae auctor nisi metus rhoncus nunc. Mauris fringilla nulla dolor, at cursus arcu gravida a. Aenean nec nulla a purus eleifend pharetra. Aenean semper metus quis purus ullamcorper, sit amet bibendum mauris ultricies. Curabitur eget faucibus tellus. Nam condimentum efficitur nibh, at eleifend sem molestie ut. Suspendisse aliquam sed mauris quis suscipit. Sed id est a tellus maximus mattis.

        Sed lobortis neque et auctor ultrices. Maecenas dignissim felis id nulla volutpat molestie. Fusce mollis dui ut risus porttitor, eu lacinia est vehicula. Fusce lobortis fringilla sagittis. Aenean rhoncus, risus vitae tempor mattis, mi felis laoreet erat, ac ullamcorper urna lectus eget neque. Donec aliquam, massa fermentum hendrerit elementum, lorem leo efficitur nisl, id imperdiet ex metus eget magna. Cras vel consequat lacus. Phasellus mi metus, venenatis eu rhoncus in, iaculis a diam. Nullam rutrum egestas ipsum, quis lobortis augue dignissim eget.

        Phasellus convallis suscipit varius. Cras sagittis lacus sem, eget ornare ipsum pharetra id. Fusce non neque interdum, ullamcorper dui non, gravida turpis. Quisque condimentum ut elit ut convallis. Nunc interdum justo at quam volutpat, nec efficitur mauris sodales. Nulla ut lorem sed augue venenatis dignissim. Morbi tincidunt, libero sed eleifend mattis, nunc nibh elementum ex, eu consectetur magna sem a risus.

        Donec sollicitudin, tortor a molestie euismod, sem magna egestas sapien, vel interdum ligula tortor vel diam. Etiam mattis aliquet ante id rutrum. Aenean fermentum leo et tortor posuere dapibus. Nullam at lorem eu elit molestie faucibus. Cras hendrerit in magna et iaculis. Pellentesque sem ex, pharetra sed metus ut, varius dapibus diam. Vivamus urna elit, auctor non efficitur et, cursus sit amet nisl. Ut eu ligula orci. Nunc tempus magna turpis, sed tincidunt felis fringilla non. Morbi nisl ipsum, sagittis non massa at, pellentesque pellentesque ipsum.

        Cras imperdiet finibus iaculis. Donec egestas, libero in imperdiet cursus, nisl nisl placerat libero, quis rhoncus est tellus ut massa. Praesent mollis mi eu facilisis sollicitudin. Proin ac augue pellentesque, efficitur sapien id, pretium ligula. Vivamus tempor tortor vitae nibh convallis fermentum. Duis a diam ac felis molestie malesuada. Aenean luctus mi vel enim posuere, id lobortis arcu bibendum. Pellentesque quis convallis sapien. Duis mi ipsum, imperdiet nec leo eu, consequat tristique nunc. Morbi finibus ipsum enim. In ullamcorper purus velit, non accumsan erat gravida sit amet. Ut finibus ipsum vitae magna tincidunt mollis.

        Praesent sapien mi, commodo in turpis in, tincidunt dignissim nulla. Cras quis nulla luctus, dignissim nisl sed, pharetra leo. Morbi sed lorem placerat, ultrices erat at, ornare erat. Donec porta sapien diam, sed condimentum justo rhoncus non. Phasellus ut vulputate nibh. Phasellus eros massa, lacinia at elit in, ultrices rutrum enim. Duis leo felis, dictum at semper quis, blandit eget tortor. Nullam vel tellus orci. Integer nec quam vitae turpis dignissim dictum. Morbi et ipsum ante. Suspendisse eu mollis leo.

        Integer tristique mauris nisl, eget congue libero sagittis luctus. Phasellus luctus eros vel libero iaculis dignissim. Sed semper hendrerit tellus vel laoreet. Proin efficitur ex eget libero egestas, id condimentum dui sodales. Phasellus semper mattis cursus. Donec a lectus efficitur dui ultricies cursus quis vel enim. Sed nec nunc massa. Donec condimentum at leo sit amet vehicula. Praesent luctus dui vel ex maximus, et lacinia purus auctor. Etiam feugiat tellus sit amet erat aliquam venenatis. Aenean sollicitudin velit in lacinia efficitur. Aenean sapien arcu, lacinia et elementum non, interdum ut mi. Ut ipsum mauris, congue a consectetur id, placerat a arcu. Quisque tellus nunc, molestie sed consequat a, convallis vitae tortor. Integer et semper augue.

        Donec interdum orci quam, mattis dignissim urna egestas in. Nullam lobortis malesuada justo quis iaculis. Phasellus vel ex et sem rutrum imperdiet vitae at nisl. Curabitur elementum ligula a turpis efficitur congue. Sed rhoncus faucibus euismod. Maecenas vitae posuere quam. Fusce accumsan neque ipsum, vitae bibendum turpis euismod quis. Phasellus ultricies rhoncus sem eu sodales. Quisque porta lacus nec lorem malesuada facilisis. Sed ac risus tortor.


    </div>
    <div class="footer">
        <Footer />
    </div>
</div>
