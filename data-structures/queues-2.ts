/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {
  if (queue.peek() !== undefined) {
    const value = queue.dequeue() as T;
    queue.enqueue(value);
  }
}

export function take2nd<T>(queue: Queue<T>): T | undefined {
  postpone(queue);
  if (queue.peek() !== undefined) {
    return queue.dequeue();
  }
}
