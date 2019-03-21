const calculator = require('../app/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract 3 - 2 to equal 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('multiply 3 * 2 to equal 6', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

describe ('isOdd',() => {

  test('5 is odd', () => {
    expect(calculator.isOdd(5)).toBe(true);
  });

  test('4 is even', () => {
    expect(calculator.isOdd(4)).toBe(false);
  });
});

describe('isEven', () => {

  test('5 is odd', () => {
    expect(calculator.isEven(5)).toBe(false);
  });

  test('4 is even', () => {
    expect(calculator.isEven(4)).toBe(true);
  });
})

describe('divisble by',() => {

  test('6 is divisible by 3', () => {
    expect(calculator.divisibleBy(6, 3)).toBe(true);
  });

  test('10 is divisible by 3', () => {
    expect(calculator.divisibleBy(10, 3)).toBe(false);
  });
});

test('49 is 7 squared', () => {
  expect(calculator.square(7)).toBe(49);
});