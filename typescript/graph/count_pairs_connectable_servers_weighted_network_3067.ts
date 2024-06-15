// https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/description/

/**
 * 1. For each node (i), we can calculate all paths that start/end at i and are connectable by DFS.
 *  - traversal descendants and increment if the distance is divisible by signalSpeed.
 * 2. for counts of all connectable paths at node(i), the total pairs of connectable servers = sum - connectablePathCounts[m] * sum.
 *  - as (a,b) and (b,a) are the same pair, so we do not need to care the (a<b) order when calculating possible combinations
 */
function countPairsOfConnectableServers(
  edges: number[][],
  signalSpeed: number
): number[] {
  let tree: Record<number, { val: number; w: number }[]> = {};

  for (let [first, second, weight] of edges) {
    if (tree[first]) {
      tree[first].push({ val: second, w: weight });
    } else {
      tree[first] = [{ val: second, w: weight }];
    }

    if (tree[second]) {
      tree[second].push({ val: first, w: weight });
    } else {
      tree[second] = [{ val: first, w: weight }];
    }
  }

  function dfs(target: number, parent: number, distance: number) {
    let count = 0;

    if (distance % signalSpeed === 0) {
      count++;
    }

    for (let { val, w } of tree[target]) {
      if (val !== parent) {
        count += dfs(val, target, distance + w);
      }
    }

    return count;
  }

  let answer = [];

  for (let i = 0; i <= edges.length; i++) {
    answer.push(0);
  }

  for (let i = 0; i <= edges.length; i++) {
    let connectablePathCounts = [];

    for (let { val, w } of tree[i]) {
      connectablePathCounts.push(dfs(val, i, w));
    }

    let total = 0;

    let sum = connectablePathCounts.reduce((acc, cur) => acc + cur, 0);

    for (let m = 0; m < connectablePathCounts.length; m++) {
      sum -= connectablePathCounts[m];
      total += sum * connectablePathCounts[m];
    }

    answer[i] = total;
  }

  return answer;
}

export {};
