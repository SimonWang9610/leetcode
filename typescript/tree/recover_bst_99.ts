// https://leetcode.com/problems/recover-binary-search-tree/description/

import { TreeNode } from "./tree_node";

/**
 * 1. find the first larger node and the last smaller node using in-order traversal
 * 2. BST in-order traversal always go through the node in ascending order
 */
function recoverTree(root: TreeNode | null): void {
  if (!root) {
    return;
  }

  let larger: TreeNode | null = null;
  let smaller: TreeNode | null = null;
  let previous: TreeNode | null = null;

  function inorder(node: TreeNode | null) {
    if (!node) {
      return;
    }

    inorder(node.left);

    if (previous && previous.val > node.val) {
      smaller = node;

      if (!larger) {
        larger = previous;
      }
    }

    previous = node;

    inorder(node.right);
  }

  inorder(root);

  [smaller!.val, larger!.val] = [larger!.val, smaller!.val];
}

function anotherSolution(root: TreeNode | null): void {
  if (!root) {
    return;
  }

  function inorder(node: TreeNode | null): TreeNode[] {
    if (!node) {
      return [];
    }

    return [...inorder(node.left), node, ...inorder(node.right)];
  }

  let ordered = inorder(root);

  let larger = null;
  let smaller = null;

  for (let i = 0; i < ordered.length; i++) {
    if (
      i + 1 < ordered.length &&
      ordered[i].val > ordered[i + 1].val &&
      !larger
    ) {
      larger = ordered[i];
    }

    if (i - 1 >= 0 && ordered[i].val < ordered[i - 1].val) {
      smaller = ordered[i];
    }
  }

  [smaller!.val, larger!.val] = [larger!.val, smaller!.val];
}
