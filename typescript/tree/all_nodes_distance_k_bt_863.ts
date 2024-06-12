// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/

// similar questions:
// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/

import { TreeNode } from "./tree_node";

/**
 * 1. build the parent tree
 * 2. dfs the tree from the TARGET node to find all nodes with distance k (need to skip visited nodes)
 */
function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  if (!root) {
    return [];
  }

  let parents: Record<number, TreeNode | null> = {};
  let result: number[] = [];

  function parenting(node: TreeNode | null, parent: TreeNode | null) {
    if (!node) {
      return;
    }

    parents[node.val] = parent;

    parenting(node.left, node);
    parenting(node.right, node);
  }

  parenting(root, null);

  let visited: Set<number> = new Set();

  function dfs(node: TreeNode | null, distance: number) {
    if (!node || visited.has(node.val)) {
      return;
    }

    visited.add(node.val);

    if (distance === k) {
      result.push(node.val);
    }

    dfs(node.left, distance + 1);
    dfs(node.right, distance + 1);
    dfs(parents[node.val], distance + 1);
  }

  dfs(target, 0);

  return result;
}

/**
 * Why it is wrong?
 * If using typical order traversal, we need to handle 3 cases:
 *   - nodes are the target's descendants
 *   - nodes are the target's ancestors
 *   - nodes are the target's cousins
 *! however, we cannot predicate who will be the target's cousins
 *! consequently, we cannot distinguish the target's cousins from the target's ancestors if both meet the condition
 */
function wrongAnswer(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  if (!root) {
    return [];
  }

  let result: number[] = [];

  let queue: TreeNode[] = [root];
  let targetDepth = 0;

  while (queue.length > 0) {
    let count = queue.length;

    let found = false;

    for (let i = 0; i < count; i++) {
      let node = queue.shift()!;

      if (node.val === target?.val) {
        found = true;
        break;
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    if (found) {
      break;
    }

    targetDepth++;
  }

  function dfs(node: TreeNode | null, depth: number) {
    if (!node) {
      return;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);

    if (node.val !== target?.val) {
      if (Math.abs(depth - targetDepth) === k || depth + targetDepth === k) {
        result.push(node.val);
      }
    }
  }

  dfs(root, 0);

  return result;
}
