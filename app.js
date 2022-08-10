function animation(element, mouvement) {
    element.classList.add(mouvement);
}
var zslideleft = document.querySelectorAll('.z-slideleft');
var zslideright = document.querySelectorAll('.z-slideright');
var zslideup = document.querySelectorAll('.z-slideup');
var zslidedown = document.querySelectorAll('.z-slidedown');
var zfadein = document.querySelectorAll('.z-fadein');

const exp = () => {



    zslideleft.forEach(go => {
        var top = go.getBoundingClientRect().top;
        if(go.getAttribute("zah-duration")){
            go.style.animationDuration = go.getAttribute("zah-duration")+"s";
        }else{
            go.style.animationDuration ="2s";
        }
        if (top >= window.innerHeight) {
            window.addEventListener('scroll', () => {
                window.requestAnimationFrame(function () {
                    top = go.getBoundingClientRect().top;
                    if (top < window.scrollY) {
                        animation(go, 'slideleft');
                    }

                });

            })
        }
        else {
            animation(go, 'slideleft');
        }


    });
    zslideright.forEach(go => {

        var top = go.getBoundingClientRect().top;
        if(go.getAttribute("zah-duration")){
            go.style.animationDuration = go.getAttribute("zah-duration")+"s";
        }else{
            go.style.animationDuration ="2s";
        }
        if (top >= window.innerHeight) {
            window.addEventListener('scroll', (e) => {
                e.stopImmediatePropagation;
                window.requestAnimationFrame(function () {
                    top = go.getBoundingClientRect().top;
                    if (top < window.scrollY) {
                        animation(go, 'slideright');
                    }

                });

            })
        }
        else {
            animation(go, 'slideright');
        }
    });
    zslideup.forEach(go => {

        var top = go.getBoundingClientRect().top;
        if(go.getAttribute("zah-duration")){
            go.style.animationDuration = go.getAttribute("zah-duration")+"s";
        }else{
            go.style.animationDuration ="2s";
        }
        if (top >= window.innerHeight) {
            window.addEventListener('scroll', () => {
                window.requestAnimationFrame(function () {
                    top = go.getBoundingClientRect().top;
                    if (top < window.scrollY) {
                        animation(go, 'slideup');
                    }

                });

            })
        }
        else {
            animation(go, 'slideup');
        }
    });
    zslidedown.forEach(go => {

        var top = go.getBoundingClientRect().top;
        if(go.getAttribute("zah-duration")){
            go.style.animationDuration = go.getAttribute("zah-duration")+"s";
        }else{
            go.style.animationDuration ="2s";
        }
        if (top >= window.innerHeight) {
            window.addEventListener('scroll', () => {
                window.requestAnimationFrame(function () {
                    top = go.getBoundingClientRect().top;
                    if (top < window.scrollY) {
                        animation(go, 'slidedown');
                    }

                });

            })
        }
        else {
            animation(go, 'slidedown');
        }
    });
    zfadein.forEach(go => {

        var top = go.getBoundingClientRect().top;
        if(go.getAttribute("zah-duration")){
            go.style.animationDuration = go.getAttribute("zah-duration")+"s";
        }else{
            go.style.animationDuration ="2s";
        }
        if (top >= window.innerHeight) {
            window.addEventListener('scroll', () => {
                window.requestAnimationFrame(function () {
                    top = go.getBoundingClientRect().top;
                    if (top < window.scrollY) {
                        animation(go, 'fadein');
                    }

                });

            })
        }
        else {
            animation(go, 'fadein');
        }
    });

}
exp();


