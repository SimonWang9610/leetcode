// https://leetcode.com/problems/find-mode-in-binary-search-tree/description/

import { TreeBuilder, TreeNode } from "./tree_node";

function findMode(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let maxFrequency = 0;
  let frequencies: Record<number, number> = {};

  function inorder(node: TreeNode | null) {
    if (!node) {
      return;
    }

    if (frequencies[node.val]) {
      frequencies[node.val] += 1;
    } else {
      frequencies[node.val] = 1;
    }

    maxFrequency = Math.max(maxFrequency, frequencies[node.val]);

    inorder(node.left);
    inorder(node.right);
  }

  inorder(root);

  let elements: number[] = [];

  for (let key in frequencies) {
    if (frequencies[key] === maxFrequency) {
      elements.push(+key);
    }
  }

  return elements;
}

//! Not working
function anotherSolution(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let maxFrequency = 0;
  let result: number[] = [];

  function inorder(
    node: TreeNode | null,
    previous: number | null,
    frequency: number = 0
  ) {
    if (!node) {
      return;
    }

    console.log("node", node.val, "previous", previous, "frequency", frequency);

    if (node.val === previous) {
      frequency += 1;
    } else {
      frequency = 1;
    }

    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      result = [node.val];
      console.log("result", result, "frequency", frequency);
    } else if (frequency === maxFrequency) {
      result.push(node.val);
      console.log("result", result, "frequency", frequency);
    }

    inorder(node.left, node.val, frequency);
    inorder(node.right, node.val, frequency);
  }

  inorder(root, null);

  return result;
}

function test() {
  let root = TreeBuilder.fromPreOrder([1, 0, 1, 0, 0, 1, 1, 0]);

  console.log(anotherSolution(root));
}

test();
