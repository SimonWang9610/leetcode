// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

import { TreeNode, TreeBuilder } from "./tree_node";

/**
 * 1. using bitwise operation to calculate the current value at each depth
 * 2. only add the current value when the node is a leaf node
 */
function sumRootToLeaf(root: TreeNode | null): number {
  let sum = 0;

  function dfs(node: TreeNode | null, current: number) {
    if (!node) {
      return;
    }

    current = (current << 1) | node.val;

    if (!node.left && !node.right) {
      sum += current;
      return;
    }

    dfs(node.left, current);
    dfs(node.right, current);
  }

  dfs(root, 0);

  return sum;
}
