// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

import { TreeNode } from "./tree_node";

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) {
    return 0;
  }

  let arr: number[] = [];

  function inorder(node: TreeNode | null) {
    if (!node) {
      return;
    }

    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  return arr[k - 1];
}

function dfsSolution(root: TreeNode | null, k: number): number {
  if (!root) {
    return 0;
  }

  let result = 0;

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }

    dfs(node.left);

    if (k === 1) {
      result = node.val;
    }

    k--;
    dfs(node.right);
  }

  dfs(root);

  return result;
}
