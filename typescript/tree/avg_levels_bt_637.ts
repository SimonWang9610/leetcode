// https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
import { TreeNode } from "./tree_node";
/**
 * 1. For BFS solution, we use a queue to store the nodes at each level, and calculate the average value of the nodes at each level
 * 2. For DFS solution, we need to sum the current node value at its depth, and increase the count of nodes at the same depth
 */
function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let stack = [root];
  let result = [];

  while (stack.length > 0) {
    let currentLevelNodes = stack;
    stack = [];

    let sum = 0;

    for (let node of currentLevelNodes) {
      sum += node.val;

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }
    }

    result.push(sum / currentLevelNodes.length);
  }

  return result;
}

function dfsSolution(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let values: [number, number][] = [];

  function dfs(node: TreeNode | null, depth: number) {
    if (!node) {
      return;
    }

    if (values[depth] === undefined) {
      values[depth] = [1, node.val];
    } else {
      values[depth][0]++;
      values[depth][1] += node.val;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return values.map(([count, sum]) => sum / count);
}
