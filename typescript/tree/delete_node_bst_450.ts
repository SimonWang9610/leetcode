// https://leetcode.com/problems/delete-node-in-a-bst/description/

import { TreeNode } from "../../datastructure/tree_node";

/**
 * 1. find the target node
 * 2. connect the target node's left and right children
 */
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return root;
  }

  if (root.val === key) {
    if (!root.left || !root.right) {
      return root.left ?? root.right;
    }

    let edgeMost = root.right;

    while (edgeMost.left) {
      edgeMost = edgeMost.left;
    }

    edgeMost.left = root.left;

    return root.right;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }

  return root;
}
