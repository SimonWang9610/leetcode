// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

import { TreeNode } from "./tree_node";

/**
 * 1. use item in pre-order list as root node of a subtree
 * 2. use item in in-order list to split the left and right subtree
 *
 * we can now how may left nodes of a sub-tree by rootIndex and its search range [start, end]:
 *  - leftSize = rootIndex - start
 * - leftNode = build(cursor + 1, start, rootIndex - 1)
 * - rightNode = build(cursor + leftSize + 1, rootIndex + 1, end)
 *
 * PATTERN: build a tree for the given root value using the given search range
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
