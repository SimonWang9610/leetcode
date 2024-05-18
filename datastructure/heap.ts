/**
 * Max-Heap: If the given Node P is Node C's parent, its value is greater than or equal to the value of Node C.
 * Min-Heap: If the given Node P is Node C's parent, its value is less than or equal to the value of Node C.
 *
 * Heap is complete binary tree
 */

const parentIndex = (index: number) => Math.floor((index - 1) / 2);
const leftChild = (index: number) => 2 * index + 1;
const rightChild = (index: number) => 2 * index + 2;

/**
 * 1. when inserting new value, we need to heapify from bottom to up to maintain the heap
 * 2. when extracting a value from heap, we just need to heapify from up to bottom to adopt each node.
 *
 * NOTE: 1. heap is not entirely ordered, so the aim is to adopt each node for maintaining heap
 *
 * Insertion: O(logN)
 *  1. append the value to the heap
 *  2. heapifyUp(heap/length-1)
 *
 * Deletion: O(logN)
 *  1. heap[0] = heap.pop()
 *  2. heapifyDown(0)
 */
abstract class Heap {
  constructor(protected heap: number[]) {
    this.heapify();
  }

  /**
   * Time Complexity: O(logN)
   * From bottom to up, node in range [0, start] is heapified.
   *
   * During insertion,
   * to ensure the entire heap is heapified, [start] typically is the last index of the heap
   *
   * NOTE: it cannot go through the entire heap, just a branch of the heap
   */
  abstract heapifyUp(start: number): void;

  /**
   * Time Complexity: O(logN)
   * From up to bottom, ensure [start] node is adopted in the heap.
   *
   * During extraction,
   * to adopt the new root of the heap, [start] typically is the first index of the heap.
   *
   * NOTE: it cannot go through the entire heap, just a branch of the heap
   */
  abstract heapifyDown(start: number): void;

  /**
   * Time Complexity: O(N * logN)
   */
  heapify() {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extract(): number | undefined {
    let root = this.heap[0];

    if (this.heap.length > 1) {
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.heapifyDown(0);
    }

    return root;
  }

  extractValue(value: number) {
    let index = this.heap.findIndex((e) => e === value);

    if (index === -1) {
      return;
    }

    this.heap[index] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(index);

    return;
  }

  peek(): number | undefined {
    return this.heap[0];
  }

  swap(first: number, second: number) {
    [this.heap[first], this.heap[second]] = [
      this.heap[second],
      this.heap[first],
    ];
  }

  size() {
    return this.heap.length;
  }

  data() {
    return this.heap;
  }
}

export class MinHeap extends Heap {
  constructor(arr: number[]) {
    super(arr);
  }

  heapifyUp(start: number) {
    let current = start;

    while (
      current > 0 &&
      this.heap[current] < this.heap[parentIndex(current)]
    ) {
      let parent = parentIndex(current);
      this.swap(current, parent);
      current = parent;
    }
  }

  heapifyDown(start: number) {
    let smallest = start;
    let left = leftChild(smallest);
    let right = rightChild(smallest);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== start) {
      this.swap(smallest, start);
      this.heapifyDown(smallest);
    }
  }
}

export class MaxHeap extends Heap {
  constructor(arr: number[]) {
    super(arr);
  }

  heapifyUp(start: number) {
    let current = start;

    while (
      current > 0 &&
      this.heap[current] > this.heap[parentIndex(current)]
    ) {
      let parent = parentIndex(current);
      this.swap(current, parent);
      current = parent;
    }
  }

  heapifyDown(start: number) {
    let largest = start;
    let left = leftChild(largest);
    let right = rightChild(largest);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== start) {
      this.swap(largest, start);
      this.heapifyDown(largest);
    }
  }
}

function test() {
  let arr = [3, 1, 6, 5, 2, 4];

  let min = new MinHeap(arr);

  console.log(min.peek());

  min.insert(0);
  min.extract();

  let max = new MaxHeap(arr);
  console.log(max.peek());

  max.insert(7);

  max.extract();
}
