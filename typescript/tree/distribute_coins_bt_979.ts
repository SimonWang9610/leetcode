// https://leetcode.com/problems/distribute-coins-in-binary-tree/description/

// similar questions:
// https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/description/

import { TreeNode } from "./tree_node";

/**
 *
 * 1.. if a node needs a coin, the coin:
 *  - either pass through one of its child nodes (contribution from its descendants)
 *  - or pass through its parent node (contribution from its parent or ancestors)
 *
 * 2. if a node has more than 1 coin, it will move all extra coins to its parent node,
 *  so its parent will decide how to distribute the extra coins
 *
 */
function distributeCoins(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let moves = 0;

  function balance(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    let leftBalance = balance(node.left);
    let rightBalance = balance(node.right);

    let currentBalance = leftBalance + rightBalance + node.val - 1;

    moves += Math.abs(currentBalance);

    return currentBalance;
  }

  balance(root);

  return moves;
}
