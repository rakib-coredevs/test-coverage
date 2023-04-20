const { add, sub } = require('../src');

test('should add', () => {
  expect(add(2, 3)).toBe(5);
})

test('should remove', () => {
  expect(sub(5, 2)).toBe(3);
})