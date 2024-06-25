// https://leetcode.com/problems/most-profitable-path-in-a-tree/description/

/**
 * 1. Must parenting to find the parent of each node explicitly;
 * otherwise, it may fail to end the DFS recursion.
 */
function mostProfitablePath(
  edges: number[][],
  bob: number,
  amount: number[]
): number {
  let graph: Record<number, number[]> = {};
  let parents: Record<number, number> = {};

  for (let [parent, child] of edges) {
    if (graph[parent]) {
      graph[parent].push(child);
    } else {
      graph[parent] = [child];
    }

    if (graph[child]) {
      graph[child].push(parent);
    } else {
      graph[child] = [parent];
    }
  }

  let visited: Set<number> = new Set();
  function parenting(val: number) {
    if (!graph[val] || visited.has(val)) {
      return;
    }

    visited.add(val);

    for (let child of graph[val]) {
      if (visited.has(child)) {
        continue;
      }

      parents[child] = val;
      parenting(child);
    }
  }

  parenting(0);

  let answer = Number.MIN_SAFE_INTEGER;
  let bobVisited: Set<number> = new Set();

  function dfs(alice: number, bob: number, profit: number) {
    if (!graph[alice]) {
      return;
    }

    let income = 0;

    if (!bobVisited.has(alice)) {
      income = alice === bob ? amount[alice] / 2 : amount[alice];
    }

    profit += income;

    let hasChild = graph[alice].length - 1 > 0 || alice === 0;

    if (!hasChild) {
      answer = Math.max(answer, profit);
      return;
    }

    bobVisited.add(bob);

    for (let child of graph[alice]) {
      if (child === parents[alice]) {
        continue;
      }

      dfs(child, parents[bob] ?? 0, profit);
    }

    bobVisited.delete(bob);
  }

  dfs(0, bob, 0);

  return answer;
}
