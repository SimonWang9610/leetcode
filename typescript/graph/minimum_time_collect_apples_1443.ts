// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/description/

// similar questions:
// https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/description/
// https://leetcode.com/problems/distribute-coins-in-binary-tree/description/

/**
 * 1/ Move all descendants of a node to the parent node.
 * 2. if the node or one of its subtrees has an apple, we need to move the collected apples up to the parent node.
 *
 * !ATTENTION:
 * 1. The tree is an undirected graph.
 * 2. It may not be a binary tree.
 */
function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
  if (n === 0) {
    return 0;
  }

  let tree: Record<number, number[]> = {};

  for (let edge of edges) {
    let [first, second] = edge;

    if (!tree[first]) {
      tree[first] = [second];
    } else {
      tree[first].push(second);
    }

    if (!tree[second]) {
      tree[second] = [first];
    } else {
      tree[second].push(first);
    }
  }

  let seen: Set<number> = new Set();

  function dfs(node: number) {
    if (seen.has(node) || !tree[node]) {
      return { move: 0, apple: false };
    }

    seen.add(node);

    let current = 0;
    let apple = hasApple[node];

    for (let child of tree[node]) {
      let result = dfs(child);

      if (result.apple) {
        current += result.move;
      }

      apple = apple || result.apple;
    }

    if (apple && node !== 0) {
      current += 2;
    }

    return { move: current, apple: apple };
  }

  let result = dfs(0);

  return result.move;
}

export {};
