//https://leetcode.com/problems/search-in-a-binary-search-tree/

import { TreeNode, TreeBuilder } from "../../datastructure/tree_node";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root || root.val === val) {
    return root;
  }

  if (val < root.val) {
    return searchBST(root.left, val);
  }
  return searchBST(root.right, val);
}
