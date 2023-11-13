import { Stack } from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  let count = 0;
  const tempStack = new Stack();
  while (stack.peek() !== undefined) {
    const value = stack.pop();
    if (value !== undefined) {
      tempStack.push(value);
      count++;
    }
  }

  while (tempStack.peek() !== undefined) {
    const value = tempStack.pop() as T;
    if (value) {
      stack.push(value);
    }
  }
  return count;
}

export function maxValue(stack: Stack<number>): number {
  let max: undefined | number;
  while (stack.peek() !== undefined) {
    const current = stack.pop() as number;
    if (max === undefined) {
      max = current;
    } else if (current > max) {
      max = current;
    }
  }
  if (max === undefined) {
    return -Infinity;
  }
  return max;
}
