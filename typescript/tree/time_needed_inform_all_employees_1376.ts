// https://leetcode.com/problems/time-needed-to-inform-all-employees/description/

// similar questions:
// https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/

/**
 * During inform process, the time is overlapped, so we need to calculate the MAX time spent to inform all subordinates.
 */
function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[]
): number {
  if (!n) {
    return 0;
  }

  let tree: Record<number, number[]> = {};

  for (let i = 0; i < n; i++) {
    let m = manager[i];

    if (!tree[i]) {
      tree[i] = [];
    }

    if (m === -1) {
      continue;
    }

    if (tree[m]) {
      tree[m].push(i);
    } else {
      tree[m] = [i];
    }
  }

  function dfs(e: number) {
    if (!tree[e] || !tree[e].length) {
      return 0;
    }

    let max = 0;

    for (let sub of tree[e]) {
      max = Math.max(max, dfs(sub));
    }

    return informTime[e] + max;
  }

  return dfs(headID);
}
