/**
 * FLAKY TESTS
 * These tests will randomly pass or fail - perfect for testing BuildKite's flaky test detection
 */

describe('Flaky Tests Suite', () => {
  test('random number test (50% failure rate)', () => {
    const random = Math.random();
    // This will fail approximately 50% of the time
    expect(random).toBeGreaterThan(0.5);
  });

  test('timestamp-based test (fails on even seconds)', () => {
    const seconds = new Date().getSeconds();
    // Fails when seconds is even, passes when odd
    expect(seconds % 2).toBe(1);
  });

  test('random boolean test (50% failure rate)', () => {
    const randomBool = Math.random() > 0.5;
    // This will fail approximately 50% of the time
    expect(randomBool).toBe(true);
  });

  test('high probability failure (80% failure rate)', () => {
    const random = Math.random();
    // This will fail approximately 80% of the time
    expect(random).toBeGreaterThan(0.8);
  });

  test('low probability failure (20% failure rate)', () => {
    const random = Math.random();
    // This will fail approximately 20% of the time
    expect(random).toBeLessThan(0.2);
  });
});
