// https://leetcode.com/problems/binary-tree-tilt/description/

import { TreeNode } from "./tree_node";

function findTilt(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let result = 0;

  function helper(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    let left = helper(node.left);
    let right = helper(node.right);

    result += Math.abs(left - right);

    return left + right + node.val;
  }

  helper(root);

  return result;
}
