// https://leetcode.com/problems/binary-tree-preorder-traversal/description/
import { TreeNode } from "./tree_node";

/**
 * 1. For DFS solution, we always first visit the left subtree, then the right subtree.
 * 2. For BFS solution, we must ensure we always visit the left child first, then the right child,
 *     so we need to push the right child first, then the left child.
 */
function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let res: number[] = [root.val];

  if (root.left) {
    res.push(...preorderTraversal(root.left));
  }

  if (root.right) {
    res.push(...preorderTraversal(root.right));
  }

  return res;
}

function bfsSolution(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let stack = [root];
  let result = [];

  while (stack.length > 0) {
    let node = stack.pop()!;

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }

    result.push(node.val);
  }

  return result;
}
