// https://leetcode.com/problems/binary-tree-coloring-game/

import { TreeNode } from "./tree_node";

/**
 * 1. Color nodes from x and y, to see if y can infect more nodes than x.
 * 2. y can start from:
 *  - the parent of x
 * - the left child of x
 * - the right child of x
 *
 * Once y is confirmed, we can check if y potentially infect more nodes than x (> n / 2).
 */
function btreeGameWinningMove(
  root: TreeNode | null,
  n: number,
  x: number
): boolean {
  let parents = {};

  let red = [];

  let left = 0;
  let right = 0;

  function count(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    let l = count(node.left);
    let r = count(node.right);

    if (node.val === x) {
      left = l;
      right = r;
    }

    return l + r + 1;
  }

  count(root);

  let max = Math.max(left, right, n - left - right - 1);

  return max > n / 2;
}
