/*******************************************************************************
 * polypick version 0.0.0
*******************************************************************************/
(function (scope) {

// define wrapping object and readonly version property
var polypick = {};
Object.defineProperty(polypick, 'version', {
  value: '0.0.0',
  writable: false
});

/*******************************************************************************
 * intersection tests
*******************************************************************************/
var intersects = {};
intersects.ray_tri = function (ray_origin, ray_direction, tri_a, tri_b, tri_c) {
  // TODO
  throw "not implemented";
};
polypick.intersects = intersects;

/*******************************************************************************
 * pick poly's
*******************************************************************************/
polypick.pick = function (mouse_x, mouse_y, tri_array) {
  // TODO
  throw "not implemented";
};

/*******************************************************************************
 * end of polypick
*******************************************************************************/
scope.polypick = polypick;
})(this);
