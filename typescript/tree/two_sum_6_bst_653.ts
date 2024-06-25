// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

import { TreeNode } from "../../datastructure/tree_node";

/**
 * 1. collect all values into a sorted array, then use two pointers to find the target
 * 2. use a set to store the values, then traverse the tree to find the target
 *
 * ? why it guarantees all values are compared
 * A: since tree traversal is ordered (in-order, pre-order, post-order),
 *  we do not need to explicitly compare two nodes, as long as one of them is matched, we know the target is found.
 *
 * For example, k - node.val is not found in visited nodes, it eventually would be found in the future nodes if it exists.
 */
function findTarget(root: TreeNode | null, k: number): boolean {
  if (!root) {
    return false;
  }

  let values = new Set();

  let found = false;

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }

    if (values.has(k - node.val)) {
      found = true;
      return;
    }

    values.add(node.val);

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return found;
}

function solution2(root: TreeNode | null, k: number): boolean {
  let values: number[] = [];

  function inOrder(node: TreeNode | null) {
    if (!node) {
      return;
    }

    inOrder(node.left);
    values.push(node.val);
    inOrder(node.right);
  }

  inOrder(root);

  let low = 0;
  let high = values.length - 1;

  while (low < high) {
    let sum = values[low] + values[high];

    if (sum === k) {
      return true;
    }

    if (sum < k) {
      low++;
    } else {
      high--;
    }
  }

  return false;
}
