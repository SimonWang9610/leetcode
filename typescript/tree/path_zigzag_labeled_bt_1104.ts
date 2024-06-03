// https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/description/

function height(label: number) {
  let depth = 0;

  while (label >= 1 << depth) {
    depth++;
  }

  return depth;
}

/**
 * For each label, we should find its parent label.
 * the maximum of its parent's row is the minimum of its row.
 *
 * the step from the label to the minimum of its row =
 * 2 * the step from the its parent's row maximum to its parent label.
 */
function pathInZigZagTree(label: number): number[] {
  let path = [];

  while (label > 1) {
    path.unshift(label);
    let depth = height(label);

    let min = 1 << (depth - 1);

    let distance = Math.floor((label - min) / 2);

    label = min - distance - 1;
  }

  path.unshift(1);

  return path;
}
