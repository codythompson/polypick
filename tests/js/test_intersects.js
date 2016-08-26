test_suite = {
  test_vars: {},

  title: 'polypick tests',

  init: function () {
    // no test_vars needed at this time
  },

  /*
   * TODO: write actual tests, and then implement
   */
  tests: {
    "polypick.intersects": {
      ray_tri: function (test_vars) {
        chai.expect(polypick.intersects.ray_tri)
          .to.throw('not implemented');
      }, // end ray_tri category
    }, // end polypick.intersects category

    polypick: {
      version: function (test_vars) {
        var expected_ver = '0.0.0';
        chai.expect(polypick.version).equals(expected_ver,
            'unexpected polypick version number');
      },

      pick: function (test_vars) {
        chai.expect(polypick.pick)
          .to.throw('not implemented');
      } // end pick category
    } // end polypick category
  },
};
