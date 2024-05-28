// https://leetcode.com/problems/unique-binary-search-trees/description/

import { TreeNode } from "./tree_node";

/**
 * 1. Dynamic programming
 * 2. Steps[k] = ∑ Steps[i] * Steps[k - i - 1]
 */
function numTrees(n: number): number {
  let steps: Record<number, number> = {};

  steps[0] = 1;
  steps[1] = 1;

  function step(k: number) {
    if (steps[k]) {
      return steps[k];
    }

    let sum = 0;

    for (let i = 0; i < k; i++) {
      sum += step(i) * step(k - i - 1);
    }

    steps[k] = sum;

    return sum;
  }

  for (let i = 0; i <= n; i++) {
    step(i);
  }

  return steps[n];
}
