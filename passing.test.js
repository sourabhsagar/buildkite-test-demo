/**
 * PASSING TESTS
 * These tests will always pass successfully
 */

describe('Passing Tests Suite', () => {
  test('simple addition works', () => {
    expect(1 + 1).toBe(2);
  });

  test('string concatenation works', () => {
    expect('Hello' + ' ' + 'World').toBe('Hello World');
  });

  test('array operations work', () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
    expect(arr[0]).toBe(1);
  });

  test('object properties work', () => {
    const obj = { name: 'BuildKite', type: 'CI/CD' };
    expect(obj.name).toBe('BuildKite');
    expect(obj.type).toBe('CI/CD');
  });

  test('boolean logic works', () => {
    expect(true).toBe(true);
    expect(false).toBe(false);
    expect(true && true).toBe(true);
    expect(true || false).toBe(true);
  });
});
