import Validator from '../app';

test('check true', () => {
  expect(Validator.validateUsername('abz123-_ABZ')).toBe(true);
});

test.each([
  'a_1_a',
  'a_12_a',
  'a_123_a',
])('check 123', (name) => {
  expect(Validator.validateUsername(name)).toBe(true);
});

test.each([
  'a_4444_a',
  'a_55555_a',
  'a_666666_a',
])('4+together', (name) => {
  expect(Validator.validateUsername(name)).toBe(false);
});

test.each([
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '[',
  ']',
  '{',
  '}',
])('%', (name) => {
  expect(Validator.validateUsername(name)).toBe(false);
});

test.each([
  '1abc',
  '-abc',
  '_abc',
  'abc1',
  'abc-',
  'abc_',
])(' "-"  "_"', (name) => {
  expect(Validator.validateUsername(name)).toBe(false);
});