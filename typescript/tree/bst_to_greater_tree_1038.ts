// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

import { TreeBuilder, TreeNode } from "./tree_node";

/**
 * 1. Just update the value in-place in the given tree INSTEAD of creating a new tree from the calculated values;
 * 2. using in-order traversal, we ensure the result value of a node is the sum of all nodes whose index is greater than it.
 * 3. once the right node is visited, we will not use its value any more, so we can update its value in-place
 * INSTEAD OF using a cache and visiting the whole tree again.
 *
 * KEY POINT:
 * 1. in-place update the value of the node.
 * 2. in-order traversal: right -> root -> left
 */
function bstToGst(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }

  let value = 0;

  function inorder(node: TreeNode | null) {
    if (!node) {
      return;
    }

    inorder(node.right);

    value += node.val;

    node.val = value;

    inorder(node.left);
  }

  inorder(root);

  return root;
}

function workButBadSolution(root: TreeNode | null) {
  if (!root) {
    return root;
  }

  let value = 0;
  let cache: Record<number, number> = {};

  function inorder(node: TreeNode | null) {
    if (!node) {
      return;
    }

    inorder(node.right);

    value += node.val;

    cache[node.val] = value;

    inorder(node.left);
  }

  inorder(root);

  function replace(node: TreeNode | null) {
    if (!node) {
      return;
    }

    node.val = cache[node.val];

    replace(node.left);
    replace(node.right);
  }

  replace(root);

  return root;
}
