// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

import { TreeNode } from "./tree_node";

/**
 * 1. use inorderIndex to constrain the range of the left and right subtree
 *
 * left-tree: [start, rootInorderIndex - 1]
 * right-tree: [rootInorderIndex + 1, end]
 *
 * 2. find the left-tree count: rootInorderIndex - start
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let inorderIndex: Record<number, number> = {};

  for (let i = 0; i < inorder.length; i++) {
    inorderIndex[inorder[i]] = i;
  }

  function build(cursor: number, start: number, end: number) {
    if (start > end) {
      return null;
    }

    let rootVal = preorder[cursor];

    let rootIndex = inorderIndex[rootVal];

    let node = new TreeNode(rootVal);

    let leftSize = rootIndex - start;

    node.left = build(cursor + 1, start, rootIndex - 1);
    node.right = build(cursor + leftSize + 1, rootIndex + 1, end);

    return node;
  }

  return build(0, 0, preorder.length - 1);
}
