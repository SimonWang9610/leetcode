// https://leetcode.com/problems/merge-two-binary-trees/description/

import { TreeNode, TreeBuilder } from "../../datastructure/tree_node";

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 || !root2) {
    return root1 ?? root2;
  }

  let node = new TreeNode(root1.val + root2.val);

  node.left = mergeTrees(root1.left, root2.left);

  node.right = mergeTrees(root1.right, root2.right);

  return node;
}
