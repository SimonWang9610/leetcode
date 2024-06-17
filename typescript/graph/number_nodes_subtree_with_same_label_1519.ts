// https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/

function countSubTrees(n: number, edges: number[][], labels: string): number[] {
  if (n === 1) {
    return [1];
  }

  let tree: Record<number, number[]> = {};

  for (let i = 0; i < edges.length; i++) {
    let [first, second] = edges[i];

    if (!tree[first]) {
      tree[first] = [second];
    } else {
      tree[first].push(second);
    }

    if (!tree[second]) {
      tree[second] = [first];
    } else {
      tree[second].push(first);
    }
  }

  let answer = Array(edges.length + 1).fill(0);
  let visited: Set<number> = new Set();

  function dfs(value: number) {
    visited.add(value);

    let count = Array(26).fill(0);

    for (let adj of tree[value]) {
      if (visited.has(adj)) {
        continue;
      }

      let result = dfs(adj);

      for (let i = 0; i < 26; i++) {
        count[i] += result[i];
      }
    }

    let index = labels.charCodeAt(value) - 97;

    count[index] += 1;

    answer[value] = count[index];

    return count;
  }

  dfs(0);

  return answer;
}

function mapSolution(n: number, edges: number[][], labels: string): number[] {
  if (n === 1) {
    return [1];
  }

  let tree: Record<number, number[]> = {};

  for (let edge of edges) {
    let [first, second] = edge;

    if (!tree[first]) {
      tree[first] = [second];
    } else {
      tree[first].push(second);
    }

    if (!tree[second]) {
      tree[second] = [first];
    } else {
      tree[second].push(first);
    }
  }

  let answer = Array(edges.length + 1).fill(0);

  let visited: Set<number> = new Set();

  function dfs(value: number) {
    visited.add(value);
    let map: Record<string, number> = {};

    for (let adj of tree[value]) {
      if (visited.has(adj)) {
        continue;
      }

      let result = dfs(adj);

      for (let key of Object.keys(result)) {
        map[key] = (map[key] ?? 0) + result[key];
      }
    }

    map[labels[value]] = (map[labels[value]] ?? 0) + 1;

    answer[value] = map[labels[value]];

    return map;
  }

  dfs(0);

  return answer;
}
