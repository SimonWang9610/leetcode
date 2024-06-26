// https://leetcode.com/problems/longest-univalue-path/

// similar question:
// https://leetcode.com/problems/linked-list-in-binary-tree/description/
// https://leetcode.com/problems/path-sum-iii/description/

import { TreeNode } from "../../datastructure/tree_node";

/**
 * 1. We only consider the case for a node: the path must pass through the node.
 *  - find the continuous path in the left subtree
 *  - find the continuous path in the right subtree
 *  - return the maximum of the two
 *
 * Finally we would add the path length of the left and right subtree for the root node.
 *
 */
function longestUnivaluePath(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  function dfs(node: TreeNode | null, target: number): number {
    if (!node) {
      return 0;
    }

    if (node.val !== target) {
      return 0;
    }

    let left = dfs(node.left, target);
    let right = dfs(node.right, target);

    return Math.max(left, right) + 1;
  }

  let left = dfs(root.left, root.val);
  let right = dfs(root.right, root.val);

  return Math.max(
    left + right,
    longestUnivaluePath(root.left),
    longestUnivaluePath(root.right)
  );
}
