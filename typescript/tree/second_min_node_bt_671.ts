// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/description/

import { TreeNode } from "../../datastructure/tree_node";

function findSecondMinimumValue(root: TreeNode | null): number {
  if (!root) {
    return -1;
  }

  if (!root.left && !root.right) {
    return -1;
  }

  let left =
    root.left?.val === root.val
      ? findSecondMinimumValue(root.left)
      : root.left?.val ?? -1;
  let right =
    root.right?.val === root.val
      ? findSecondMinimumValue(root.right)
      : root.right?.val ?? -1;

  if (left > 0 && right > 0) {
    return Math.min(left, right);
  } else {
    return Math.max(left, right);
  }
}

function anotherSolution(root: TreeNode | null): number {
  if (!root) {
    return -1;
  }

  const smallest = root.val;

  let secondSmallest = smallest;
  let stack: TreeNode[] = [root];

  while (stack.length > 0) {
    let node = stack.pop()!;

    if (node.val > smallest) {
      secondSmallest =
        secondSmallest === smallest
          ? node.val
          : Math.min(secondSmallest, node.val);
    }

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return secondSmallest === smallest ? -1 : secondSmallest;
}
