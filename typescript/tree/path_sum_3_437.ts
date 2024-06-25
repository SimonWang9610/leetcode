// https://leetcode.com/problems/path-sum-iii/description/

import { TreeNode } from "./tree_node";

/**
 *! 1. cannot use pathSum(node.left, targetSum-node.val), as it cannot guarantee the path is continuous.
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }

  let count = 0;

  function dfs(node: TreeNode | null, remain: number) {
    if (!node) {
      return;
    }

    if (node.val === remain) {
      count++;
    }

    dfs(node.left, remain - node.val);
    dfs(node.right, remain - node.val);
  }

  dfs(root, targetSum);

  count += pathSum(root.left, targetSum);
  count += pathSum(root.right, targetSum);

  return count;
}

function anotherSolution(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }

  let answer = 0;

  function subtract(node: TreeNode | null, target: number) {
    if (!node) {
      return;
    }

    if (node.val === target) {
      answer++;
    }

    subtract(node.left, target - node.val);
    subtract(node.right, target - node.val);
  }

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }

    subtract(node, targetSum);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return answer;
}
