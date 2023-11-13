import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns only the even numbers from a mixed array', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [2, 4, 6];
    expect(evenNumbers(input)).toEqual(expectedOutput);
  });

  it('returns the same array if all numbers are even', () => {
    const input = [2, 4, 6];
    expect(evenNumbers(input)).toEqual(input);
  });

  it('returns an empty array if all numbers are odd', () => {
    const input = [1, 3, 5];
    expect(evenNumbers(input)).toEqual([]);
  });

  it('returns an empty array for an empty input array', () => {
    expect(evenNumbers([])).toEqual([]);
  });

  it('includes negative even numbers', () => {
    const input = [-2, -3, -4];
    const expectedOutput = [-2, -4];
    expect(evenNumbers(input)).toEqual(expectedOutput);
  });

  it('handles an array containing zero', () => {
    const input = [0, 1, 3, 5];
    const expectedOutput = [0];
    expect(evenNumbers(input)).toEqual(expectedOutput);
  });
});

describe('toDollars', () => {
  it('correctly formats a regular number as dollars and cents', () => {
    expect(toDollars(123)).toEqual('$123.00');
  });

  it('formats zero as dollars and cents', () => {
    expect(toDollars(0)).toEqual('$0.00');
  });

  it('handles negative numbers', () => {
    expect(toDollars(-123)).toEqual('$-123.00');
  });

  it('accurately formats floating point numbers', () => {
    expect(toDollars(123.456)).toEqual('$123.46'); // Note: rounding
    expect(toDollars(123.004)).toEqual('$123.00'); // Note: no rounding up
  });

  it('formats very large numbers correctly', () => {
    expect(toDollars(123456789.95)).toEqual('$123456789.95');
  });
});

describe('divideBy', () => {
  it('correctly divides each number in the array by the divisor', () => {
    const numbers = [10, 20, 30];
    const divisor = 2;
    const expectedResult = [5, 10, 15];
    expect(divideBy(numbers, divisor)).toEqual(expectedResult);
  });

  it('returns Infinity for elements when divided by zero', () => {
    const numbers = [10, 20, 30];
    const divisor = 0;
    const expectedResult = [Infinity, Infinity, Infinity];
    expect(divideBy(numbers, divisor)).toEqual(expectedResult);
  });

  it('returns an empty array when given an empty array', () => {
    const numbers: [] = [];
    const divisor = 3;
    expect(divideBy(numbers, divisor)).toEqual([]);
  });

  it('handles negative numbers and divisors', () => {
    const numbers = [-10, 20, -30];
    const divisor = -2;
    const expectedResult = [5, -10, 15];
    expect(divideBy(numbers, divisor)).toEqual(expectedResult);
  });

  it('accurately divides floating point numbers', () => {
    const numbers = [1.2, 2.4, 3.6];
    const divisor = 1.2;
    const expectedResult = [1, 2, 3];
    expect(divideBy(numbers, divisor)).toEqual(expectedResult);
  });
});

describe('multiplyBy', () => {
  it('multiplies all number values by the given multiplier', () => {
    const obj = { a: 2, b: 3, c: 4 };
    const multiplier = 2;
    const expectedResult = { a: 4, b: 6, c: 8 };
    expect(multiplyBy(obj, multiplier)).toEqual(expectedResult);
  });

  it('ignores non-number values', () => {
    const obj = { a: 2, b: 'string', c: true, d: 4 };
    const multiplier = 3;
    const expectedResult = { a: 6, d: 12 };
    expect(multiplyBy(obj, multiplier)).toEqual(expectedResult);
  });

  it('returns an empty object when given an empty object', () => {
    const obj = {};
    const multiplier = 5;
    expect(multiplyBy(obj, multiplier)).toEqual({});
  });

  it('handles negative multipliers correctly', () => {
    const obj = { a: 3, b: -2 };
    const multiplier = -3;
    const expectedResult = { a: -9, b: 6 };
    expect(multiplyBy(obj, multiplier)).toEqual(expectedResult);
  });

  it('returns zero values when the multiplier is zero', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const multiplier = 0;
    const expectedResult = { a: 0, b: 0, c: 0 };
    expect(multiplyBy(obj, multiplier)).toEqual(expectedResult);
  });
});
