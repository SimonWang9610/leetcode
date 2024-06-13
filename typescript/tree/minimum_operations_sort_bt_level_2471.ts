// https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/description/

import { TreeNode } from "./tree_node";

/**
 * 1. cache the old index of each node before sorting.
 * 2. during comparison, if old index is not equal to the new index, swap the nodes
 * 2. mark the node is restored to its original position by updating the cache
 */
function minimumOperations(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let queue = [root];

  let answer = 0;

  while (queue.length > 0) {
    let count = queue.length;

    let arr: number[] = [];

    let cache: Record<number, number> = {};

    for (let i = 0; i < count; i++) {
      let node = queue.shift()!;

      arr.push(node.val);

      cache[node.val] = arr.length - 1;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    arr.sort((a, b) => a - b);

    let i = 0;

    while (i < arr.length) {
      let oldIndex = cache[arr[i]];

      if (oldIndex !== i) {
        let tmp = arr[oldIndex];
        arr[oldIndex] = arr[i];
        arr[i] = tmp;

        cache[arr[oldIndex]] = oldIndex;

        answer++;
      } else {
        i++;
      }
    }
  }

  return answer;
}
