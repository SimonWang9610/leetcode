// https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/description/

import { TreeNode } from "../../datastructure/tree_node";

/**
 * 1. If the node is a leaf node, we remember: the number of nodes that distance 1 is 1 (itself).
 * 2. as long as the distance is greater than the given target, they will not be one of a good pair.
 */
function countPairs(root: TreeNode | null, distance: number): number {
  if (!root) {
    return 0;
  }

  let answer = 0;

  function dfs(node: TreeNode | null) {
    if (!node) {
      return Array(distance + 1).fill(0);
    }

    let result = Array(distance + 1).fill(0);

    if (!node.left && !node.right) {
      result[1] += 1;
      return result;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    for (let i = 0; i < left.length; i++) {
      for (let j = right.length - 1; j >= 0; j--) {
        if (i + j <= distance) {
          answer += left[i] * right[j];
        }
      }
    }

    for (let i = 1; i <= distance; i++) {
      result[i] = left[i - 1] + right[i - 1];
    }

    return result;
  }

  dfs(root);

  return answer;
}

/**
 * 1. Find the number of good leaf node pairs in the left and right subtrees.
 * 2. Find the number of good leaf node pairs that are connected by the root node.
 */
function solution2(root: TreeNode | null, distance: number): number {
  if (!root) {
    return 0;
  }

  let left = countPairs(root.left, distance);
  let right = countPairs(root.right, distance);

  function dfs(node: TreeNode | null, depth: number, result: number[]) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      result.push(depth);
      return;
    }

    dfs(node.left, depth + 1, result);
    dfs(node.right, depth + 1, result);
  }

  let lefts: number[] = [];
  let rights: number[] = [];
  dfs(root.left, 1, lefts);
  dfs(root.right, 1, rights);

  let answer = left + right;

  for (let l of lefts) {
    for (let r of rights) {
      if (l + r <= distance) {
        answer++;
      }
    }
  }

  return answer;
}

/**
 * Reason: each node val is not UNIQUE, so the path is not unique
 */
function wrong(root: TreeNode | null, distance: number): number {
  if (!root) {
    return 0;
  }

  let leaves: number[][] = [];

  let current: number[] = [];

  function find(node: TreeNode | null) {
    if (!node) {
      return;
    }

    current.push(node.val);

    if (!node.left && !node.right) {
      leaves.push([...current]);
    }

    find(node.left);
    find(node.right);

    current.pop();
  }

  find(root);

  function compare(first: number[], second: number[]) {
    let cursor = 0;

    while (cursor < first.length && cursor < second.length) {
      let a = first[cursor];
      let b = second[cursor];
      if (a !== b) {
        break;
      }

      cursor++;
    }

    return first.length - cursor + second.length - cursor;
  }

  let answer = 0;

  for (let i = 0; i < leaves.length; i++) {
    for (let j = i + 1; j < leaves.length; j++) {
      let d = compare(leaves[i], leaves[j]);

      if (d <= distance) {
        answer++;
      }
    }
  }

  return answer;
}
