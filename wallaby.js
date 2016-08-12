const project = require('./aurelia_project/aurelia.json');

module.exports = function(wallaby) {
  let testSrc = [
    { pattern: project.unitTestRunner.source, included: false },
    'test/aurelia-karma.js'
  ];

  return {
    debug: true,
    compilers: {
      'src/**/*.js': wallaby.compilers.babel()
    },
    files: [
      { pattern: 'node_modules/sinon/lib/sinon.js', instrument: false },
      { pattern: 'node_modules/bluebird/**/browser/bluebird.js', instrument: false },
      { pattern: 'src/**/*.js', load: false }
    ],
    tests: testSrc,
    // env: { type: 'browser' },
    testFramework: 'jasmine'
  };
};
