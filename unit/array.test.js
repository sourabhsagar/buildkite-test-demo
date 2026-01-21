/**
 * ARRAY TESTS
 * Moved from passing.test.js to test BuildKite's tracking of moved tests
 */

describe('Array Operations Suite', () => {
  test('array operations work', () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
    expect(arr[0]).toBe(1);
  });
});
