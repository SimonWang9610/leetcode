// https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/description/

// similar questions:
// https://leetcode.com/problems/distribute-coins-in-binary-tree/description/
// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/description/

import { TreeNode } from "../tree/tree_node";

/**
 * For each city, we can calculate the cost of passengers of moving all its children and itself,
 * and then move all passengers to its parent city.
 *
 * 1. build the road tree
 * 2. dfs the tree to calculate the cost of moving all passengers to the capital city
 */
function minimumFuelCost(roads: number[][], seats: number): number {
  let tree: Record<number, number[]> = {};
  let seen: Set<number> = new Set();
  let cost = 0;

  for (let road of roads) {
    if (tree[road[0]]) {
      tree[road[0]].push(road[1]);
    } else {
      tree[road[0]] = [road[1]];
    }

    if (tree[road[1]]) {
      tree[road[1]].push(road[0]);
    } else {
      tree[road[1]] = [road[0]];
    }
  }

  function dfs(city: number) {
    if (seen.has(city)) {
      return 0;
    }

    seen.add(city);

    let total = 1;

    for (let adj of tree[city]) {
      total += dfs(adj);
    }

    // no need to move passengers if the city is the capital city
    if (city) {
      cost += Math.ceil(total / seats);
    }

    return total;
  }

  dfs(0);

  return cost;
}
