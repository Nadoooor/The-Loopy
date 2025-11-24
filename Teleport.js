AFRAME.registerComponent('telethere', {
    schema: {
        
    },

    init: function () {
        var n = 0;
        this.el.addEventListener('obbcollisionstarted', (e) => {
            if (n == 0) {
                n += 1;
                return;
            }
            console.log("teleporting...");
            const touched = e.detail.withEl;

            if (touched.id == "food"){
                window.location.href = "/Food-World/index.html";
            } else if (touched.id == "Astdro"){
                window.location.href = "/Astro-World/index.html";
            } else if (touched.id == "spooky"){
                window.location.href = "/Spooky-World/index.html";
            } else if (touched.id == "Puzz"){
                window.location.href = "/PuzzGrid/index.html";
            } else if (touched.id == "Galla"){
                window.location.href = "GallaVR/index.html";
            }
        });
    },

    
});
