// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/description/

import { TreeNode } from "../../datastructure/tree_node";

/**
 * 1. in preorder traversal of BST, the array is shaped as [root, ...left, ...right]
 */
function bstFromPreorder(preorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }

  let root = new TreeNode(preorder[0]);

  let leftArr = [];
  let rightArr = [];

  for (let ele of preorder) {
    if (ele < root.val) {
      leftArr.push(ele);
    } else if (ele > root.val) {
      rightArr.push(ele);
    }
  }

  let left = bstFromPreorder(leftArr);
  let right = bstFromPreorder(rightArr);

  root.left = left;
  root.right = right;

  return root;
}

/**
 * 1. the iteration always increase the index by 1;
 * 2. ensure the left child is always smaller than the root;
 */
function faster(preorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }

  let current = 0;

  function build(arr: number[], max: number): TreeNode | null {
    if (current === arr.length || arr[current] > max) {
      return null;
    }

    let root = new TreeNode(arr[current++]);
    // < root.val;
    root.left = build(arr, root.val);
    // [root.val, ...right]
    root.right = build(arr, max);

    return root;
  }

  return build(preorder, Number.MAX_SAFE_INTEGER);
}
