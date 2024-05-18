// https://leetcode.com/problems/kth-largest-element-in-a-stream/description/

import { MinHeap } from "../../datastructure/heap";
/**
 * 1. K-th largest == the root of a K-sized MinHeap
 *  2. after inserting, ensure the size of the heap is K, then return the root
 */

class KthLargest {
  private heap: MinHeap;
  private k: number;

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.heap = new MinHeap(nums);

    while (this.heap.size() > this.k) {
      console.log(this.heap.data());
      this.heap.extract();
      console.log(this.heap.data());
    }
  }

  add(val: number): number {
    this.heap.insert(val);

    if (this.heap.size() > this.k) {
      this.heap.extract();
    }

    return this.heap.peek()!;
  }
}

function test() {
  let kth = new KthLargest(3, [4, 5, 8, 2]);

  console.log(kth.add(3)); // 4
  console.log(kth.add(5)); // 5
  console.log(kth.add(10)); // 5
  console.log(kth.add(9)); // 8
  console.log(kth.add(4)); // 8
}

test();
