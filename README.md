# BuildKite Test Engine Demo

This is a demo repository to test **BuildKite Test Engine** with three types of tests:

✅ **Passing Tests** - Always succeed
❌ **Failing Tests** - Always fail
🎲 **Flaky Tests** - Randomly pass/fail (to test BuildKite's flaky test detection)

## Test Files

- `passing.test.js` - 5 tests that always pass
- `failing.test.js` - 5 tests that always fail
- `flaky.test.js` - 5 tests with varying failure rates (20%, 50%, 80%)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Tests Locally (Optional)

```bash
npm test
```

You'll see:
- ✅ 5 passing tests
- ❌ 5 failing tests
- 🎲 ~2-3 flaky tests passing (varies each run)

### 3. Set Up BuildKite Pipeline

#### Step 1: Create a New Pipeline in BuildKite

1. Go to your BuildKite dashboard
2. Click **"New Pipeline"**
3. Connect this repository
4. BuildKite will automatically detect `.buildkite/pipeline.yml`

#### Step 2: Configure Test Engine

1. In BuildKite, go to **Test Engine** section
2. Create a new **Test Suite**
3. Note your **Suite Slug** (e.g., `my-org/my-suite`)
4. Generate an **API Token** for Test Engine

#### Step 3: Add Environment Variables

In your BuildKite pipeline settings, add these environment variables:

- `BUILDKITE_TEST_ENGINE_API_TOKEN` - Your Test Engine API token
- `BUILDKITE_TEST_ENGINE_SUITE_SLUG` - Your test suite slug (e.g., `my-org/demo-suite`)

#### Step 4: Run the Pipeline

1. Trigger a build in BuildKite
2. Watch the tests run
3. Check **Test Engine Dashboard** to see:
   - ✅ Passing tests tracked
   - ❌ Failing tests logged
   - 🎲 **Flaky tests detected** after multiple runs!

### 4. Test BuildKite's Flaky Test Detection

Run the pipeline **multiple times** (5-10 runs) to see BuildKite Test Engine:

- Detect flaky tests automatically
- Show flaky test statistics
- Track failure rates over time
- Trigger workflows (if configured)

### 5. Configure Workflows (Optional)

In Test Engine, set up workflows to:

- **Label** flaky tests automatically
- **Mute/skip** consistently failing tests
- Send **Slack notifications** for new failures
- Create **Linear issues** for flaky tests

## Expected Results

After 5+ runs, BuildKite Test Engine will show:

| Test Type | Result |
|-----------|--------|
| `passing.test.js` | ✅ Always passes (stable) |
| `failing.test.js` | ❌ Always fails (stable failure) |
| `flaky.test.js` | 🎲 **DETECTED AS FLAKY** |

## What to Test in BuildKite

✅ **Test Engine Dashboard**
- View test performance over time
- See which tests are flaky
- Track failure rates

✅ **Workflows**
- Set up monitors for flaky tests
- Configure actions (Slack, Linear, labels)
- Test automated responses

✅ **Test Splitting (Advanced)**
- Use `bktec` to parallelize tests across agents
- See intelligent test distribution

## Useful Commands

```bash
# Run tests locally
npm test

# Run only passing tests
npm test passing.test.js

# Run only failing tests
npm test failing.test.js

# Run only flaky tests
npm test flaky.test.js
```

## Troubleshooting

**Tests not showing in Test Engine?**
- Verify `BUILDKITE_TEST_ENGINE_API_TOKEN` is set
- Verify `BUILDKITE_TEST_ENGINE_SUITE_SLUG` is correct
- Check BuildKite build logs for errors

**Flaky tests not detected?**
- Run the pipeline **at least 5-10 times**
- BuildKite needs multiple runs to detect patterns
- Check Test Engine monitors configuration

## Resources

- [BuildKite Test Engine Docs](https://buildkite.com/docs/test-engine)
- [Test Engine Workflows](https://buildkite.com/docs/test-engine/workflows)
- [Test Engine Client (bktec)](https://github.com/buildkite/test-engine-client)

---

**Next Steps:**
1. Push this repo to GitHub/GitLab/Bitbucket
2. Create a BuildKite pipeline
3. Run multiple builds
4. Watch BuildKite detect your flaky tests! 🎉
