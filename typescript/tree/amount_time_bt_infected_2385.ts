// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/

//similar questions:
// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/
// https://leetcode.com/problems/time-needed-to-inform-all-employees/description/

import { TreeNode } from "./tree_node";

/**
 * the question can be converted as: the max distance between the target node and any other node.
 */
function amountOfTime(root: TreeNode | null, start: number): number {
  if (!root) {
    return 0;
  }

  let parents: Record<number, TreeNode | null> = {};
  let target: TreeNode | null = null;

  function parenting(node: TreeNode | null, parent: TreeNode | null) {
    if (!node) {
      return;
    }

    parents[node.val] = parent;

    if (node.val === start) {
      target = node;
    }

    parenting(node.left, node);
    parenting(node.right, node);
  }

  parenting(root, null);

  let visited: Set<number> = new Set();
  let max = 0;

  function dfs(node: TreeNode | null, distance: number) {
    if (!node || visited.has(node.val)) {
      return;
    }

    visited.add(node.val);

    max = Math.max(max, distance);

    dfs(node.left, distance + 1);
    dfs(node.right, distance + 1);
    dfs(parents[node.val], distance + 1);
  }

  dfs(target, 0);

  return max;
}

/**
 * 1. find the lowest common ancestor of the target node and [root, other leaf nodes].
 */
function another(root: TreeNode | null, start: number): number {
  if (!root) {
    return 0;
  }

  let paths: number[][] = [[root.val]];
  let targetpath: number[] = [];

  let current: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }

    current.push(node.val);

    if (node.val === start) {
      targetpath = [...current];
    }

    if (!node.left && !node.right) {
      paths.push([...current]);
    }

    dfs(node.left);
    dfs(node.right);
    current.pop();
  }

  dfs(root);

  let max = 0;

  for (let path of paths) {
    let cursor = 0;

    while (cursor < path.length && cursor < targetpath.length) {
      let a = path[cursor];
      let b = targetpath[cursor];

      if (a !== b) {
        break;
      }

      cursor++;
    }

    let distance = path.length + targetpath.length - 2 * cursor;

    max = Math.max(distance, max);
  }

  if (paths.length > 0) {
    max = Math.max(max, targetpath.length - 1);
  }

  return max;
}
