module.exports = function(wallaby) {
  return {
    files: [
      { pattern: 'node_modules/sinon/lib/sinon.js', instrument: false },
      { pattern: 'node_modules/bluebird/**/browser/bluebird.js', instrument: false },
      { pattern: 'src/**/*.js', load: false }
    ],
    tests: [
      { pattern: 'test/unit/**/*.spec.js' }
    ],
    env: { type: 'browser' },
    debug: true,
    testFramework: 'jasmine'
  };
};
