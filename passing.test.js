/**
 * PASSING TESTS
 * These tests will always pass successfully
 */

describe('Passing Tests Suite', () => {
  test('simple addition works', () => {
    expect(1 + 1).toBe(2);
  });

  test('string joining works', () => {
    expect('Hello' + ' ' + 'World').toBe('Hello World');
  });

  test('object properties work', () => {
    const obj = { name: 'BuildKite', type: 'CI/CD' };
    expect(obj.name).toBe('BuildKite');
    expect(obj.type).toBe('CI/CD');
  });

  test('multiplication works', () => {
    expect(2 * 3).toBe(6);
    expect(5 * 5).toBe(25);
  });
});
