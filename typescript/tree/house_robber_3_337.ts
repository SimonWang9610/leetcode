// https://leetcode.com/problems/house-robber-iii/description/

// similar questions (bottom-up approach):
// https://leetcode.com/problems/distribute-coins-in-binary-tree/description/
//

import { TreeNode } from "../tree/tree_node";

/**
 *
 * iterate all possible scenarios (bottom-up) to get the maximum amount of money robbed:
 * 1. rob the current node when the left and right are skipped
 * 2. skip the current node:
 *  a. rob the left and skip the right
 *  b. skip the left and rob the right
 *  c. skip the left and right
 *  d. rob the left and right
 */
function rob(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let answer = 0;

  function dfs(node: TreeNode | null): { skipped: number; robbed: number } {
    if (!node) {
      return { skipped: 0, robbed: 0 };
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    let skipped = Math.max(
      left.robbed + right.robbed,
      left.skipped + right.skipped,
      left.robbed + right.skipped,
      left.skipped + right.robbed
    );

    let robbed = left.skipped + right.skipped + node.val;

    answer = Math.max(skipped, robbed, answer);

    return { skipped, robbed };
  }

  dfs(root);

  return answer;
}
