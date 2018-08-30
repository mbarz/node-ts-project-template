

module.exports = function(wallaby) {
  process.env.NODE_PATH = require('path').join(__dirname, '../node_modules');
  return {
    files: [
      'src/**/*.ts',
      '!src/**/*.test.ts',
      '!src/**/*.spec.ts',
      'tsconfig.json',
      'package.json',
      'jest.config.js'
    ],
    tests: [
      'src/**/*.test.ts',
      'src/**/*.spec.ts'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jest',
    debug: false,

    setup: function (wallaby) {
      const jestConfig = require('./jest.config');
      delete jestConfig.transform; // <--
      wallaby.testFramework.configure(jestConfig);
    }
  };
}