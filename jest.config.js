module.exports = {
  // Send results to Test Engine
  reporters: [
    'default',
    'buildkite-test-collector/jest/reporter'
  ],

  // Enable column + line capture for Test Engine
  testLocationInResults: true
};
