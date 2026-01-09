# JUnit XML Support in BuildKite Test Engine

This demo now generates **JUnit XML** reports in addition to the native Test Engine integration.

## How It Works

### 1. Jest Generates JUnit XML

The `jest-junit` reporter is configured in [jest.config.js](jest.config.js:7-14) to output XML:

```javascript
['jest-junit', {
  outputDirectory: './test-results',
  outputName: 'junit.xml',
}]
```

### 2. BuildKite Uploads as Artifact

The pipeline uploads the XML file as a build artifact:

```yaml
artifact_paths:
  - "test-results/junit.xml"
```

### 3. Test Engine Accepts JUnit XML

BuildKite Test Engine can also ingest JUnit XML directly via:
- Manual upload through UI
- API upload using the JUnit XML endpoint
- Automatic detection from build artifacts

## Why Use JUnit XML?

### Use Cases:
- **Momentic Tests**: Momentic can output JUnit XML
- **Legacy Systems**: Existing CI with JUnit reports
- **Multiple Frameworks**: Standardized format across different test runners
- **Custom Tools**: Any tool that generates JUnit XML

### Advantages:
✅ Standard format (widely supported)
✅ Works with any testing framework
✅ Can combine results from multiple tools
✅ Historical compatibility

### Disadvantages vs Native Collector:
❌ Less real-time (uploaded after tests complete)
❌ May lose some metadata
❌ Requires XML generation step

## JUnit XML Format Example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="jest tests" tests="15" failures="7" errors="0" time="0.347">
  <testsuite name="Passing Tests Suite" tests="5" failures="0" time="0.123">
    <testcase classname="passing.test.js" name="simple addition works" time="0.005"/>
    <testcase classname="passing.test.js" name="string concatenation works" time="0.002"/>
  </testsuite>
  <testsuite name="Failing Tests Suite" tests="5" failures="5" time="0.087">
    <testcase classname="failing.test.js" name="math assertion fails" time="0.015">
      <failure message="Expected 3, received 2">...</failure>
    </testcase>
  </testsuite>
</testsuites>
```

## Viewing JUnit XML

### In BuildKite:
1. Go to a completed build
2. Click "Artifacts" tab
3. Download `test-results/junit.xml`

### In Test Engine:
The native collector already sends data, but you could also:
1. Use BuildKite's JUnit XML plugin
2. Manually upload via Test Engine API
3. Parse and visualize separately

## For Momentic Tests

To use this with Momentic:

1. Run Momentic tests with JUnit output:
   ```bash
   momentic test --format junit --output test-results/momentic-junit.xml
   ```

2. Update pipeline to upload Momentic XML:
   ```yaml
   artifact_paths:
     - "test-results/momentic-junit.xml"
   ```

3. Test Engine will ingest the XML format
