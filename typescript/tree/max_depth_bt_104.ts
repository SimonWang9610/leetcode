// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
import { TreeNode, TreeBuilder } from "./tree_node";

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let leftDepth = maxDepth(root?.left);
  let rightDepth = maxDepth(root?.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
