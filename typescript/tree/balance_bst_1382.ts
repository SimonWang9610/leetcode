// https://leetcode.com/problems/balance-a-binary-search-tree/description/

import { TreeNode } from "./tree_node";

/**
 * 1. inorder traversal of BST is always sorted;
 * 2. we can build a balanced BST from the sorted array;
 */
function balanceBST(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }

  function inorder(node: TreeNode | null): number[] {
    if (!node) {
      return [];
    }

    let left = inorder(node.left);
    let right = inorder(node.right);

    return [...left, node.val, ...right];
  }

  let arr = inorder(root);

  function build(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
      return null;
    }

    let mid = Math.floor(nums.length / 2);

    let left = build(nums.slice(0, mid));
    let right = build(nums.slice(mid + 1));

    return new TreeNode(nums[mid], left, right);
  }

  return build(arr);
}
