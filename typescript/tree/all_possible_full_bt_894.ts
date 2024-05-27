// https://leetcode.com/problems/all-possible-full-binary-trees/

import { TreeNode } from "./tree_node";

/**
 * 1. we must go through all possible full binary trees with n nodes like backtracing;
 * 2. we can cache the result of the sub-trees to avoid unnecessary traversal;
 */

function allPossibleFBT(n: number): Array<TreeNode | null> {
  if (n % 2 === 0) {
    return [];
  }

  let cache: Record<number, Array<TreeNode | null>> = {};

  function build(k: number): Array<TreeNode | null> {
    if (k % 2 === 0) {
      return [];
    }

    if (cache[k]) {
      return cache[k];
    }

    if (k === 1) {
      cache[k] = [new TreeNode(0)];
    } else if (k === 3) {
      cache[k] = [new TreeNode(0, new TreeNode(0), new TreeNode(0))];
    } else {
      let result = [];
      for (let i = 1; i < k; i += 2) {
        let lefts = build(i);
        let rights = build(k - i - 1);

        for (let left of lefts) {
          for (let right of rights) {
            result.push(new TreeNode(0, left, right));
          }
        }
      }
      cache[k] = result;
    }

    return cache[k];
  }

  return build(n);
}

function allPossibleFBTWithoutCache(n: number): Array<TreeNode | null> {
  if (n % 2 === 0) {
    return [];
  }

  if (n === 1) {
    return [new TreeNode(0)];
  }

  if (n === 3) {
    return [new TreeNode(0, new TreeNode(0), new TreeNode(0))];
  }

  let i = 1;
  let j = n - 2;

  let result = [];

  while (i < n && j > 0) {
    let lefts = allPossibleFBTWithoutCache(i);
    let rights = allPossibleFBTWithoutCache(j);

    for (let left of lefts) {
      for (let right of rights) {
        result.push(new TreeNode(0, left, right));
      }
    }

    i += 2;
    j = n - i - 1;
  }

  return result;
}
