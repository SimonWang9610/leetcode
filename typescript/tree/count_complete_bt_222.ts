// https://leetcode.com/problems/count-complete-tree-nodes/description/
import { TreeNode } from "./tree_node";

/**
 * 1. If left height === right height, it means the left subtree is a full binary tree: 1 << leftHeight (inclusive the root)
 *   while we can not ensure if the right subtree is a full binary tree, so we need to countNodes(root.right)
 *
 * 2. If left height !== right height, it means the right subtree is a full binary tree: 1 << rightHeight (inclusive the root)
 *
 * Note: leftHeight - rightHeight in [0, 1] for complete binary tree
 */
function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  function height(node: TreeNode | null): number {
    return node ? 1 + height(node.left) : 0;
  }

  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  if (leftHeight === rightHeight) {
    return (1 << leftHeight) + countNodes(root.right);
  } else {
    return (1 << rightHeight) + countNodes(root.left);
  }
}
