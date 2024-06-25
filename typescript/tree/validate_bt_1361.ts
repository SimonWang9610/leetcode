// https://leetcode.com/problems/validate-binary-tree-nodes/description/

/**
 * A valid binary tree:
 *  1. only has one root;
 *  2. all nodes can be visited exactly once from the root;
 *  3. no cycle in the tree (a parent node refers to a child node, and the child node refers to the parent node).
 */
function validateBinaryTreeNodes(
  n: number,
  leftChild: number[],
  rightChild: number[]
): boolean {
  let nodes = new Set([...leftChild, ...rightChild]);

  let root = null;

  for (let i = 0; i < n; i++) {
    if (!nodes.has(i)) {
      root = i;
      break;
    }
  }

  if (root === null) {
    return false;
  }

  let visited: Set<number> = new Set();

  let queue: number[] = [root];

  while (queue.length > 0) {
    let count = queue.length;

    for (let i = 0; i < count; i++) {
      let node = queue.shift()!;

      if (node < 0) {
        continue;
      }

      if (visited.has(node)) {
        return false;
      }

      visited.add(node);
      queue.push(leftChild[node]);
      queue.push(rightChild[node]);
    }
  }

  return visited.size === n;
}

function dfs(n: number, leftChild: number[], rightChild: number[]): boolean {
  let visited: Set<number> = new Set();
  let tree: Record<number, number[]> = {};

  for (let i = 0; i < n; i++) {
    let left = leftChild[i];
    let right = rightChild[i];

    if (!tree[i]) {
      tree[i] = [];
    }

    if (left >= 0) {
      tree[i].push(left);

      if (!tree[left]) {
        tree[left] = [];
      }

      // avoid cycle
      if (visited.has(left)) {
        return false;
      } else {
        visited.add(left);
      }
    }

    if (right >= 0) {
      tree[i].push(right);

      if (!tree[right]) {
        tree[right] = [];
      }

      // avoid cycle
      if (visited.has(right)) {
        return false;
      } else {
        visited.add(right);
      }
    }
  }

  let root = null;

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      root = i;
      break;
    }
  }

  if (root === null) {
    return false;
  }

  let count = 0;

  function dfs(val: number) {
    if (!tree[val]) {
      return;
    }

    count++;

    for (let child of tree[val]) {
      dfs(child);
    }
  }

  dfs(root);

  return count === n;
}
