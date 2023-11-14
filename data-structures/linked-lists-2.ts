/* eslint-disable @typescript-eslint/no-empty-function */
import { LinkedList } from './lib/linked-list';

export function getLength<T>(list: LinkedList<T>): number {
  let count = 0;
  let node: LinkedList<T> | null = list;
  while (node !== null) {
    count++;
    node = node.next;
  }
  return count;
}

export function append<T>(list: LinkedList<T>, value: T): void {
  if (list === null) {
    return;
  }
  let node: LinkedList<T> | null = list;
  while (node.next !== null) {
    node = node.next;
  }
  node.next = new LinkedList(value);
}

export function getTail<T>(list: LinkedList<T>): T | null {
  if (list === null) {
    return null;
  }
  let node: LinkedList<T> | null = list;
  while (node.next !== null) {
    node = node.next;
  }
  return node.data;
}

export function includes<T>(list: LinkedList<T>, value: T): boolean {
  if (list === null) {
    return false;
  }
  let node: LinkedList<T> | null = list;
  while (node !== null) {
    if (node.data === value) {
      return true;
    }
    node = node.next;
  }
  return false;
}
