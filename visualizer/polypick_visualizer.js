var pvis = {
  kill: false,

  scene: null,
  camera: null,
  renderer: null,
  controls: null,

  cam_near: 0.1,
  cam_far: 1000,

  init: function () {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, this.cam_near, this.cam_far);
    camera.position.z = 5;
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    var controls = new THREE.OrbitControls(camera, renderer.domElement);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.controls = controls;

    this.update();
  },

  update: function () {
    if (this.kill) {
      this.kill = false;
      return;
    } else {
      requestAnimationFrame(function () {
        pvis.update();
      });
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  },

  add_tri: function (point_a, point_b, point_c, color) {
    color = color || 0xffffff;

    var geo = new THREE.Geometry();
    geo.vertices.push(this.to_vec(point_a), this.to_vec(point_b), this.to_vec(point_c));
    geo.faces.push(new THREE.Face3(0, 1, 2));

    var mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      color: color,
      side: THREE.DoubleSide
    }));

    this.scene.add(mesh);

    return mesh;
  },
  
  add_line: function (start, end, color) {
    color = color || 0xff0000;

    var geo = new THREE.Geometry();
    geo.vertices.push(this.to_vec(start), this.to_vec(end));

    var line = new THREE.Line(geo, new THREE.LineBasicMaterial({
      color: color
    }));

    this.scene.add(line);

    return line;
  },

  add_ray: function (origin, direction, length, color) {
    length = length || this.cam_far;
    color = color || 0xff0000;

    for (var i = 0; i < origin.length; i++) {
      direction[i] = origin[i] + (direction[i] * length);
    }

    return this.add_line(origin, direction, color);
  },

  to_vec: function (array) {
    // this would be way easier if we could reliable call aplly on a constructor

    switch (array.length) {
      case 2: 
        return new THREE.Vector2(array[0], array[1]);
      case 3:
        return new THREE.Vector3(array[0], array[1], array[2]);
      case 4:
        return new THREE.Vector4(array[0], array[1], array[2], array[3]);
      default:
        return null;
    }
  },
};

window.addEventListener('load', function () {
  pvis.init();
});
