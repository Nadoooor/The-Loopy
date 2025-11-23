AFRAME.registerComponent('spawn', {
    schema:{
        what: {type: 'string', default: ''},
        where: {type: 'string', default: '5 2 5'},
        scale: {type: 'string', default: '1 1 1'},
        offset: {type: 'string', default: '0 0 0'}
    },

    init: function () {
         console.log("installed spawn");
         this.el.addEventListener('click', (e) => {
            console.log("Clicked Grap");
            const newfood = document.createElement('a-entity');
            newfood.setAttribute('gltf-model', this.data.what);
            newfood.setAttribute('grap', '');
            newfood.setAttribute('class', 'draggable');
            newfood.setAttribute('scale', this.data.scale);
            newfood.setAttribute('position', this.data.where);
            newfood.setAttribute('ammo-body', 'type: dynamic');
            newfood.setAttribute('ammo-shape', 'type: hull');
            newfood.setAttribute('ammo-shape', 'offset', this.data.offset);
            this.el.sceneEl.appendChild(newfood);
         });

    },

});

