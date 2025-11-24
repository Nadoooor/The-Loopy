
AFRAME.registerComponent('telethere', {
    init: function () {
        count = 0;
        this.el.addEventListener('obbcollisionstarted', (e) => {
            console.log("teleporting...");
            const touched = e.detail.withEl;
            const food = document.querySelector('#food');
            const Astro = document.querySelector('#astro');
            const spooky = document.querySelector('#spooky');
            const Puzz = document.querySelector('#Puzz');
            const Galla = document.querySelector('#galla');
            if (count < 6){
                count += 1;
                return;
            }
            if (touched == food){
                window.location.href = "/Food-World/index.html";
                console.log("teleport to food world");
            } else if (touched == Astro){
                window.location.href = "/AstroWorld/index.html";
                console.log("teleport to astro world");
            } else if (touched == spooky){
                window.location.href = "/Spooky_World/index.html";
                console.log("teleport to spooky world");
            } else if (touched == Puzz){
                window.location.href = "/PuzzGrid/index.html";
                console.log("teleport to puzz world");
            } else if (touched == Galla){
                window.location.href = "/GallaVR/index.html";
                console.log("teleport to galla world");
            } else{
                console.log("not touching anything");
            }
        });
    },

    
});
