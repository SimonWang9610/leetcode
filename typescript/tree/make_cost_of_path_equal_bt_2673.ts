// https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/description/

//similar questions:
// https://leetcode.com/problems/distribute-coins-in-binary-tree/description/

/**
 * 1. keep the left and right subtrees are equal by diffing the max costs of the left and right subtrees,
 * 2. as we may need to increment at their parent node,
 *  we need to return the max cost of the subtrees + the cost of the current node.
 */
function minIncrements(n: number, cost: number[]): number {
  let answer = 0;

  function dfs(val: number): number {
    if (val > n) {
      return 0;
    }

    let left = dfs(val * 2);
    let right = dfs(val * 2 + 1);

    let diff = Math.abs(left - right);

    answer += diff;

    return cost[val - 1] + Math.max(left, right);
  }

  dfs(1);

  return answer;
}
