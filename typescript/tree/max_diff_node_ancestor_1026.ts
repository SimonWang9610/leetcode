// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/

import { TreeBuilder, TreeNode } from "../../datastructure/tree_node";

function maxAncestorDiff(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let result = 0;

  function dfs(node: TreeNode | null): { min: number; max: number } | null {
    if (!node) {
      return null;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    let min = node.val;
    let max = node.val;

    if (left !== null) {
      result = Math.max(
        result,
        Math.abs(node.val - left?.max),
        Math.abs(node.val - left?.min)
      );
      min = Math.min(min, left.min);
      max = Math.max(max, left.max);
    }

    if (right !== null) {
      result = Math.max(
        result,
        Math.abs(node.val - right?.max),
        Math.abs(node.val - right?.min)
      );
      min = Math.min(min, right.min);
      max = Math.max(max, right.max);
    }

    return { min, max };
  }

  dfs(root);

  return result;
}

function test() {
  let root = TreeBuilder.fromPreOrder([
    8,
    3,
    10,
    1,
    6,
    null,
    14,
    null,
    null,
    4,
    7,
    13,
  ]);

  console.log(maxAncestorDiff(root));
}

test();
