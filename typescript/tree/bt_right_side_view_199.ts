// https://leetcode.com/problems/binary-tree-right-side-view/description/

import { TreeNode } from "./tree_node";

/**
 * 1. From top-bottom, the result array is always incremented by 1 at each level
 * 2. as long as the result length is less than the current depth, we add the node value to the result array,
 * to guarantee the rightmost node is added to the result array by [right, left] order traversal
 */
function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let result: number[] = [];

  function dfs(node: TreeNode | null, depth: number) {
    if (!node) {
      return;
    }

    if (depth >= result.length) {
      result.push(node.val);
    }

    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  }

  dfs(root, 0);

  return result;
}

function bfs(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let queue: TreeNode[] = [root];
  let result = [];

  while (queue.length > 0) {
    let count = queue.length;

    if (count) {
      result.push(queue[0].val);
    }

    for (let i = 0; i < count; i++) {
      let node = queue.shift()!;

      if (node.right) {
        queue.push(node.right);
      }

      if (node.left) {
        queue.push(node.left);
      }
    }
  }

  return result;
}
