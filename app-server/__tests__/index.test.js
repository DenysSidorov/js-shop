import sum from '../server-test';
test('1 + 2 should return 3', () => {
  expect(sum(1, 2)).toBe(3);
});
