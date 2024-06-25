// https://leetcode.com/problems/symmetric-tree/description/

import { TreeBuilder, TreeNode } from "../../datastructure/tree_node";

/**
 * DFS: we need to compare the left subtree with the right subtree INSTEAD of [left vs.left] and [right vs. right]
 * BFS: we should start comparing from [root.left, root.right] INSTEAD of [root]
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  function isMirror(first: TreeNode | null, second: TreeNode | null): boolean {
    if (!first && !second) {
      return true;
    }

    if (!first || !second) {
      return false;
    }

    return (
      first.val === second.val &&
      isMirror(first.left, second.right) &&
      isMirror(first.right, second.left)
    );
  }

  return isMirror(root.left, root.right);
}

function bsfSolution(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  let stack = [root.left, root.right];

  while (stack.length > 0) {
    let current = stack.splice(0);

    let mid = Math.floor(current.length / 2);

    for (let i = 0; i < mid; i++) {
      let left = current[i];
      let right = current[current.length - 1 - i];

      if (!left && !right) {
        continue;
      }

      if (!left || !right || left.val !== right.val) {
        return false;
      }
    }

    for (let node of current) {
      if (node) {
        stack.push(node.left, node.right);
      }
    }
  }

  return true;
}

function test() {
  let root = TreeBuilder.fromPreOrder([1, 2, 2, null, 3, null, 3]);

  console.log(bsfSolution(root)); // false
}

test();
