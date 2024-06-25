// https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/description/

// similar question
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

import { TreeNode } from "../../datastructure/tree_node";

type Path = { val: number; direction: string };

function getDirections(
  root: TreeNode | null,
  startValue: number,
  destValue: number
): string {
  let parents: Record<number, TreeNode | null> = {};

  let startPath: Path[] = [];
  let destPath: Path[] = [];
  let current: Path[] = [];

  function dfs(node: TreeNode | null, direction: string) {
    if (!node) {
      return;
    }

    current.push({ val: node.val, direction });

    if (node.val === startValue) {
      startPath = [...current];
    }

    if (node.val === destValue) {
      destPath = [...current];
    }

    dfs(node.left, "L");
    dfs(node.right, "R");

    current.pop();
  }

  dfs(root, "");

  while (startPath.length > 0 && destPath.length > 0) {
    let s = startPath[0];
    let d = destPath[0];

    if (s.val !== d.val) {
      break;
    } else {
      startPath.shift();
      destPath.shift();
    }
  }

  let answer = "";

  for (let s of startPath) {
    answer += "U";
  }

  for (let d of destPath) {
    answer += d.direction;
  }

  return answer;
}
