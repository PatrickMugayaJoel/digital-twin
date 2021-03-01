module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  restoreMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'api/config', 'api/app.js', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
};
