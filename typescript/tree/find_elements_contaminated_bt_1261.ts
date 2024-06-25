// https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/description/

import { TreeNode } from "../../datastructure/tree_node";

/**
 * 1. all elements of the recovered tree are unique.
 */
class FindElements {
  elements: Set<number>;
  recovered: TreeNode | null;
  constructor(root: TreeNode | null) {
    let elements = new Set<number>();

    function recover(node: TreeNode | null) {
      if (!node) {
        return;
      }

      if (node.left) {
        node.left.val = (node.val << 1) + 1;
      }

      if (node.right) {
        node.right.val = (node.val + 1) << 1;
      }

      elements.add(node.val);

      recover(node.left);
      recover(node.right);
    }

    if (root) {
      root.val = 0;
    }

    recover(root);

    this.elements = elements;
    this.recovered = root;
  }

  find(target: number): boolean {
    return this.elements.has(target);
  }
}
