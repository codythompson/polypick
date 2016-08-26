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
      ray_tri: function (test_vars) {
        chai.expect(polypick.intersects.ray_tri)
          .to.throw('not implemented');
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
