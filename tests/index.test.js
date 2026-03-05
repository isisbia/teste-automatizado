// tests/index.test.js
const { soma, subt } = require('../src/index');

test('soma 1 + 2 para igualar 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('subt 5 - 2 para igualar 3', () => {
  expect(subt(5, 2)).toBe(3);
});