// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/

import { TreeNode } from "./tree_node";

/**
 * Always return the tail of the flattened tree
 */
function flatten(root: TreeNode | null): void {
  if (!root) {
    return;
  }

  function dfs(node: TreeNode | null): TreeNode | null {
    if (!node) {
      return null;
    }

    let leftTail = dfs(node.left) ?? node;
    let rightTail = dfs(node.right) ?? leftTail;

    leftTail.right = node.right;

    if (node.left) {
      node.right = node.left;
    }

    node.left = null;

    return rightTail;
  }

  dfs(root);
}
