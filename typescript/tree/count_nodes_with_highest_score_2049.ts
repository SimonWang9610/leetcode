// https://leetcode.com/problems/count-nodes-with-the-highest-score/description/

/**
 * 1. score[i] = (n - count[i]) * count[left] * count[right]
 *
 */
function countHighestScoreNodes(parents: number[]): number {
  let tree: Record<number, number[]> = {};

  for (let i = 0; i < parents.length; i++) {
    let parent = parents[i];

    if (!tree[i]) {
      tree[i] = [];
    }

    if (i === 0) {
      continue;
    }

    if (tree[parent]) {
      tree[parent].push(i);
    } else {
      tree[parent] = [i];
    }
  }

  let answer = 0;
  let max = 0;

  function dfs(val: number) {
    if (!tree[val]) {
      return 0;
    }

    let count = 1;
    let score = 1;

    for (let child of tree[val]) {
      let childCount = dfs(child);
      score *= childCount;
      count += childCount;
    }

    if (val > 0) {
      score *= parents.length - count;
    }

    if (score > max) {
      answer = 1;
      max = score;
    } else if (score === max) {
      answer++;
    }

    return count;
  }

  dfs(0);

  return answer;
}
