// https://leetcode.com/problems/diameter-of-binary-tree/description/

import { TreeNode } from "../../datastructure/tree_node";

/**
 * 1. Max(Height(leftTree) + Height(rightTree)) for each node == diameter
 */
function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let maxDepth = 0;

  function helper(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    let left = helper(node.left);
    let right = helper(node.right);

    maxDepth = Math.max(maxDepth, left + right);

    return Math.max(left, right) + 1;
  }

  helper(root);

  return maxDepth;
}
