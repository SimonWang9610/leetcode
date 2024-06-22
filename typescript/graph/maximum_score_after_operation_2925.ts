// https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/description/

/**
 *! - minSum: sum of min values of subtrees => minSum = Math.min(values[val], minSum)
 *
 * 1. 3 cases:
 *  - leaf node: {total: values[val], min: values[val]}
 *  - minSum >= values[val]: we can take all children while resetting the current node
 *  - minSum < values[val]: we can take the current node while eliminating the minSum (all kept minimum nodes in paths)
 */
function maximumScoreAfterOperations(
  edges: number[][],
  values: number[]
): number {
  let graph: Record<number, number[]> = {};

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

  console.log(graph);

  let cache: Record<number, number> = {};

  function dfs(val: number, parent: number) {
    if (!graph[val]) {
      return { total: 0, min: 0 };
    }

    let sum = 0;
    let minSum = 0;

    for (let child of graph[val]) {
      if (child === parent) {
        continue;
      }

      let tmp = dfs(child, val);

      sum += tmp.total;
      minSum += tmp.min;
    }

    if (minSum === 0) {
      return { total: values[val], min: values[val] };
    } else if (minSum >= values[val]) {
      cache[val] = sum;
    } else {
      cache[val] = sum - minSum + values[val];
    }

    return { total: sum + values[val], min: Math.min(values[val], minSum) };
  }

  dfs(0, -1);

  return cache[0];
}
