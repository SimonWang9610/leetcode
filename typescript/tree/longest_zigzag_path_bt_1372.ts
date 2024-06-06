// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/

import { TreeNode } from "./tree_node";

/**
 * Given a binary tree root, there are two paths that pass the given node.
 *
 * its parent node either choose to go to the left child or the right child.
 */
function longestZigZag(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let answer = 0;

  function dfs(node: TreeNode | null): { left: number; right: number } {
    if (!node) {
      return { left: -1, right: -1 };
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    answer = Math.max(answer, 1 + left.right, 1 + right.left);

    return { left: 1 + left.right, right: 1 + right.left };
  }

  dfs(root);

  return answer;
}
