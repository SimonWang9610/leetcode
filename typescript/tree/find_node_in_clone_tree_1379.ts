
import { TreeNode, TreeBuilder } from './tree_node';


function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {

    if (original === target) {
        return cloned;
    }

    if (!original || !cloned) {
        return null;
    }

    return getTargetCopy(original.left, cloned?.left ?? null, target) || getTargetCopy(original.right, cloned.right, target);
};