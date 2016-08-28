test_suite = {
  test_vars: {},

  title: 'polypick tests',

  init: function () {
    this.test_vars.ray_tri_six_ways = function (or, dir, a, b, c) {
      chai.expect(polypick.intersects.ray_tri(or, dir, a, b, c))
        .to.be.true;
      chai.expect(polypick.intersects.ray_tri(or, dir, a, c, b))
        .to.be.true;
      chai.expect(polypick.intersects.ray_tri(or, dir, b, a, c))
        .to.be.true;
      chai.expect(polypick.intersects.ray_tri(or, dir, b, c, a))
        .to.be.true;
      chai.expect(polypick.intersects.ray_tri(or, dir, c, a, b))
        .to.be.true;
      chai.expect(polypick.intersects.ray_tri(or, dir, c, b, a))
        .to.be.true;
    };

    this.test_vars.left_a = [-2.5, 1.5, 0];
    this.test_vars.left_b = [-2.5, -1.5, 0];
    this.test_vars.left_c = [4.25, -1.0, 0];
  },

  /*
   * TODO: write actual tests, and then implement
   */
  tests: {
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
    }, // end polypick category

    "polypick.intersects": {
      ray_tri: {
        "ray_tri left tri, true": {
          "-x-y+z towards .x.y-z true": function (test_vars) {
            var or = [-1.5, -0.5, 2];
            var dir = [0, 0, -1];

            test_vars.ray_tri_six_ways(or, dir, test_vars.left_a, test_vars.left_b, test_vars.left_c);
          },
          "+x-y+z towards .x.y-z true": function (test_vars) {
            var or = [0.5, -1.0, 2];
            var dir = [0, 0, -1];

            test_vars.ray_tri_six_ways(or, dir, test_vars.left_a, test_vars.left_b, test_vars.left_c);
          },
          "+x+y+z towards .x.y-z true": function (test_vars) {
            var or = [0.05, 0.5, 2];
            var dir = [0, 0, -1];

            test_vars.ray_tri_six_ways(or, dir, test_vars.left_a, test_vars.left_b, test_vars.left_c);
          },
          "-x+y+z towards .x.y-z true": function (test_vars) {
            var or = [-0.05, 0.5, 2];
            var dir = [0, 0, -1];

            test_vars.ray_tri_six_ways(or, dir, test_vars.left_a, test_vars.left_b, test_vars.left_c);
          },
        }
      }, // end ray_tri category
    }, // end polypick.intersects category

    // these tests act a checklist for release stuff
    "housekeeping": {
      // the version test above should be updated before a point release
      // new version
      "update version number test": function (test_vars) {
        var check = false;
        chai.expect(check).to.equal(true, 'this should happen before a point release');
      },

      // this should be changed in the commit before release
      "update ROADMAP.md and/or README.md": function (test_vars) {
        var check = false;
        chai.expect(check).to.equal(true, 'this should happen before a point release');
      },
    }

  },
};
