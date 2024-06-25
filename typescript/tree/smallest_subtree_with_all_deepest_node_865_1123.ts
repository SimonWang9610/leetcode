// https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/description/
// https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/description/

import { TreeNode } from "../../datastructure/tree_node";

function solution(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  function dfs(
    node: TreeNode | null,
    depth: number
  ): { common: TreeNode | null; depth: number } {
    if (!node) {
      return { common: null, depth: depth };
    }

    if (!node.left && !node.right) {
      return { common: node, depth: depth };
    }

    let left = dfs(node.left, depth + 1);
    let right = dfs(node.right, depth + 1);

    if (!left.common || !right.common) {
      return left.common ? left : right;
    }

    if (left.depth > right.depth) {
      return left;
    } else if (right.depth > left.depth) {
      return right;
    }

    return { common: node, depth: left.depth };
  }

  let result = dfs(root, 0);

  return result.common;
}
