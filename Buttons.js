AFRAME.registerComponent('light+', {

    init: function () {
        console.log("light button loaded");
        this.el.addEventListener('click', () => {
            console.log("fuck");
        
            const light = document.querySelector('#myLight');
            var inten = parseInt(light.getAttribute('light').intensity);

            inten += 1;
            if (inten >  5) {
                inten = 5;
            }
            light.setAttribute('light', 'intensity', inten.toString() );
        });
    },

});

AFRAME.registerComponent('light-', {
    
    init: function () {
        console.log("Loaded")
        this.el.addEventListener('click', () =>{
            console.log("here you clicked");
            const light = document.querySelector('#myLight');
            var inten = parseInt(light.getAttribute('light').intensity);
            inten -= 1;
            if (inten < 0) {
                inten = 0;
            }
            light.setAttribute('light', 'intensity', inten.toString());
        })   
    },
   
});

