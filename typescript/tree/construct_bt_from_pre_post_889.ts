// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/

import { TreeNode } from "./tree_node";

/**
 * 1. Using the postIndex to constrain the range of the left and right subtree
 *
 * left-tree: [postStart, postIndex - 1]
 * right-tree: [postStart + left.count, postIndex - 1]
 *
 * 2. find the left-tree count: left.count after building the left subtree
 */
function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }

  let indexCache: Record<number, number> = {};

  for (let i = 0; i < postorder.length; i++) {
    indexCache[postorder[i]] = i;
  }

  function build(
    preIndex: number,
    postStart: number,
    postEnd: number
  ): { node: TreeNode | null; count: number } {
    if (postStart > postEnd) {
      return { node: null, count: 0 };
    }

    let rootVal = preorder[preIndex];
    let postIndex = indexCache[rootVal];
    let root = new TreeNode(rootVal);

    let left = build(preIndex + 1, postStart, postIndex - 1);
    let right = build(
      preIndex + left.count + 1,
      postStart + left.count,
      postIndex - 1
    );

    root.left = left.node;
    root.right = right.node;

    return { node: root, count: left.count + right.count + 1 };
  }

  let root = build(0, 0, postorder.length - 1);

  return root.node;
}
