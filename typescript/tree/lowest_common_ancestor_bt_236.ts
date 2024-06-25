// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

// similar question
// https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/description/

import { TreeNode } from "./tree_node";

/**
 * 1. Find the path from root to p and q
 * 2. Compare the path to find the lowest common ancestor
 */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) {
    return root;
  }

  let pathP: TreeNode[] = [];
  let pathQ: TreeNode[] = [];

  let path: TreeNode[] = [];

  function find(node: TreeNode | null) {
    if (!node) {
      return;
    }

    path.push(node);

    if (node.val === p?.val) {
      pathP = [...path];
    }

    if (node.val === q?.val) {
      pathQ = [...path];
    }

    find(node.left);
    find(node.right);
    path.pop();
  }

  find(root);

  if (pathQ.length === 0 || pathP.length === 0) {
    return null;
  }

  let result: TreeNode | null = null;

  while (pathQ.length > 0 && pathP.length > 0) {
    let aq = pathQ.shift()!;
    let ap = pathP.shift()!;
    if (ap === aq) {
      result = aq;
    } else {
      break;
    }
  }

  return result;
}
