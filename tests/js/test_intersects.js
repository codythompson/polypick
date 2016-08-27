test_suite = {
  test_vars: {},

  title: 'polypick tests',

  init: function () {
    // no test_vars needed at this time
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
        "-x-y-z towards .x.y+z true": function (test_vars) {
          var or = [-1.5, -0.5, -2];
          var dir = [0, 0, 1];

          var a = [-0.5, 0.5, 0];
          var b = [-0.5, -0.5, 0];
          var c = [1.25, -0.5, 0];

          test_vars.ray_tri_six_ways(or, dir, a, b, c);
        },
      }, // end ray_tri category
    }, // end polypick.intersects category

    // these tests act a checklist for release stuff
    "housekeeping": {
      // the version test above should be updated as the first commit to of a
      // new version
      "update version number test": function (test_vars) {
        var check = true;
        chai.expect(check).to.equal(true, 'this should happen in the first commit of a new version');
      },

      // this should be changed in the commit before release
      "update roadmap and/or README.md": function (test_vars) {
        var check = true;
        chai.expect(check).to.equal(true, 'this should happen in the last commit of a new version');
      },
    }

  },
};
