// https://leetcode.com/problems/maximum-binary-tree-ii/description/

import { TreeNode } from "./tree_node";

function insertIntoMaxTree(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  if (!root) {
    return new TreeNode(val);
  }

  if (val > root.val) {
    return new TreeNode(val, root);
  }

  root.right = insertIntoMaxTree(root.right, val);

  return root;
}
