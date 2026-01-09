/**
 * FAILING TESTS
 * These tests will ALWAYS fail - intentionally for testing BuildKite Test Engine
 */

describe('Failing Tests Suite', () => {
  test('math assertion fails', () => {
    expect(1 + 1).toBe(3); // Wrong: 1+1 = 2, not 3
  });

  test('string comparison fails', () => {
    expect('Hello').toBe('Goodbye'); // Wrong: strings don't match
  });

  test('array length assertion fails', () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(5); // Wrong: length is 3, not 5
  });

  test('null check fails', () => {
    const value = null;
    expect(value).toBeDefined(); // Wrong: null is not defined
  });

  test('type check fails', () => {
    expect(typeof 'string').toBe('number'); // Wrong: string is not a number
  });
});
