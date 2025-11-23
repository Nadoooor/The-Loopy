AFRAME.registerComponent('grap', {
    init: function () {
      console.log("installed");
        var nom = new Audio('Nom.mp3');
        this.isdraging = false;
        this.cam = document.querySelector('#cam');
        this.el.addEventListener('click', (e) => {
          
          const body= this.el.body;
          const bodyel = e.target;
          console.log(bodyel);
          if (!body || !this.cam)return;
          const Direction = new THREE.Vector3();
          this.cam.object3D.getWorldDirection(Direction);
          this.isdraging = !this.isdraging;
          if (this.isdraging){
            body.setGravity(new Ammo.btVector3(0,0,0));
            body.activate();
          }else{
            bodyel.remove();
            nom.play();
          }

        });

    },

    tick: function (time, timeDelta) {
      if (!this.isdraging)return;
      const cam = this.cam;
      const body = this.el.body;
      if (!body || !cam)return;
      const campos = new THREE.Vector3();
      cam.object3D.getWorldPosition(campos);
      const camDirection = new THREE.Vector3();
      cam.object3D.getWorldDirection(camDirection);
      const camQuaternion = new THREE.Quaternion();
      cam.object3D.getWorldQuaternion(camQuaternion);
      campos.add(camDirection.multiplyScalar(-2));
      const Trans = new Ammo.btTransform();
      Trans.setIdentity();
      Trans.setOrigin(new Ammo.btVector3(campos.x, campos.y, campos.z));
      Trans.setRotation(new Ammo.btQuaternion(camQuaternion.x, camQuaternion.y + 4, camQuaternion.z, camQuaternion.w));
      body.setWorldTransform(Trans);
      body.activate();



    }
});
