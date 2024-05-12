// https://leetcode.com/problems/univalued-binary-tree/description/

import { TreeNode } from "./tree_node";

function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  let anchor = root.val;

  function traverse(node: TreeNode | null): boolean {
    if (!node) {
      return true;
    }

    if (node.val !== anchor) {
      return false;
    }

    return traverse(node.left) && traverse(node.right);
  }

  return traverse(root);
}

function bfsSolution(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  let anchor = root.val;
  let stack = [root];

  while (stack.length > 0) {
    let node = stack.pop()!;

    if (node.val !== anchor) {
      return false;
    }

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return true;
}
