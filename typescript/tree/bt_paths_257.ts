// https://leetcode.com/problems/binary-tree-paths/description/

import { TreeNode } from "../../datastructure/tree_node";

function dfsSolution(root: TreeNode | null): string[] {
  if (!root) {
    return [];
  }

  let result: string[] = [];

  function helper(node: TreeNode | null, path: string) {
    if (!node) {
      return;
    }

    if (path === "") {
      path = `${node.val}`;
    } else {
      path += `->${node.val}`;
    }

    if (!node.left && !node.right) {
      result.push(path);
    }

    helper(node.left, path);
    helper(node.right, path);
  }

  helper(root, "");

  return result;
}

function bfsSolution(root: TreeNode | null): string[] {
  if (!root) {
    return [];
  }

  let stack = [
    {
      node: root,
      path: `${root.val}`,
    },
  ];

  let result = [];

  while (stack.length > 0) {
    let { node, path } = stack.shift()!;

    if (!node.left && !node.right) {
      result.push(path);
    } else {
      if (node.left) {
        stack.push({
          node: node.left,
          path: `${path}->${node.left.val}`,
        });
      }

      if (node.right) {
        stack.push({
          node: node.right,
          path: `${path}->${node.right.val}`,
        });
      }
    }
  }

  return result;
}
