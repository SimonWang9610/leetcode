// https://leetcode.com/problems/increasing-order-search-tree/

import { TreeNode, TreeBuilder } from "./tree_node";

/**
 * 1. always return the head of the entire formatted tree
 * 2. only connect the current node's right with its formatted right subtree
 */

function helper(head: TreeNode | null, tail: TreeNode | null): TreeNode | null {
  if (!head) {
    return tail;
  }

  let result = helper(head.left, head);
  head.left = null;
  head.right = helper(head.right, tail);

  return result;
}

function increasingBST(root: TreeNode | null) {
  if (!root) {
    return null;
  }

  return helper(root, null);
}
