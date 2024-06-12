import { TreeNode } from "./tree/tree_node";

function amountOfTime(root: TreeNode | null, start: number): number {
  if (!root) {
    return 0;
  }

  let depths: Record<string, number> = {};
  let descendants: Set<string> = new Set();

  function dfs(node: TreeNode | null, depth: number, sameTree: boolean) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      depths[`${node.val}`] = depth;
      if (sameTree) {
        descendants.add(`${node.val}`);
      }
      return;
    }

    let same = sameTree || node.val === start;

    dfs(node.left, depth + 1, same);
    dfs(node.right, depth + 1, same);
  }

  dfs(root, 0, root.val === start);

  let max = 0;
  let target = depths[start];

  console.log(depths, descendants);

  for (let [key, val] of Object.entries(depths)) {
    let distance = descendants.has(key)
      ? depths[parseInt(key)] - target
      : depths[parseInt(key)] + target - 1;

    max = Math.max(max, distance);
  }

  return max;
}
