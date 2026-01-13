module.exports = {
  // Send results to Test Engine
  reporters: [
    'default',
    ['buildkite-test-collector/jest/reporter', {
      tags: {
        priority: 'high'
      }
    }],
    // Also generate JUnit XML
    ['jest-junit', {
      outputDirectory: './test-results',
      outputName: 'junit.xml',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}',
      ancestorSeparator: ' › ',
      usePathForSuiteName: true
    }]
  ],

  // Enable column + line capture for Test Engine
  testLocationInResults: true
};
