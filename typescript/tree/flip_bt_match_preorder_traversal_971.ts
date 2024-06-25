// https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/description/

import { TreeNode } from "../../datastructure/tree_node";

/**
 * 1. for preorder traversal, if any if its children is null, it will not affect the traversal result of its subtree.
 * 2. we only need to flip one node at a time if needed and recursively operate on its subtrees.
 */
function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {
  if (!root || !voyage.length) {
    return [-1];
  }

  let index = 0;
  let answer: number[] = [];

  function flippable(node: TreeNode | null): boolean {
    if (!node) {
      return true;
    }

    if (voyage[index] !== node.val) {
      return false;
    }

    index++;

    let flipped = false;

    if (node.left && node.right && voyage[index] !== node.left.val) {
      flipped = true;
      answer.push(node.val);
    }

    return (
      flippable(flipped ? node.right : node.left) &&
      flippable(flipped ? node.left : node.right)
    );
  }

  return flippable(root) ? answer : [-1];
}
