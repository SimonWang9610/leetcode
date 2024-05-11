// https://leetcode.com/problems/invert-binary-tree/description/
import { TreeNode, TreeBuilder } from "./tree_node";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  let left = invertTree(root.left);
  let right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
}
