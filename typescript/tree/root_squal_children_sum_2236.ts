// https://leetcode.com/problems/root-equals-sum-of-children/description/

import { TreeNode, TreeBuilder } from './tree_node';

function checkTree(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    return root.val == (root.left?.val ?? 0) + (root.right?.val ?? 0)
};