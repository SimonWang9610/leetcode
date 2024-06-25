// https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/description/

import { TreeNode } from "../../datastructure/tree_node";

/**
 * Need to check again if the node is a leaf node after traversing the left and right nodes.
 *
 */
function sufficientSubset(
  root: TreeNode | null,
  limit: number
): TreeNode | null {
  if (!root) {
    return null;
  }

  function dfs(node: TreeNode | null, sum: number) {
    if (!node) {
      return null;
    }

    sum += node.val;

    if (!node.left && !node.right) {
      return sum >= limit ? node : null;
    }

    node.left = dfs(node.left, sum);
    node.right = dfs(node.right, sum);

    if (!node.left && !node.right) {
      return null;
    }

    return node;
  }

  return dfs(root, 0);
}
