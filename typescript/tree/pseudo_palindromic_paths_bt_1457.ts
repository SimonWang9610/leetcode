// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/description/

import { TreeNode } from "./tree_node";

/**
 * As long as the number of odd numbers in the array is less than or equal to 1, its permutation can be a palindrome;
 */
function isPalindrome(nums: number[]) {
  let oddCount = 0;

  for (let value of nums) {
    if (value % 2 !== 0) {
      oddCount++;
    }

    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}

/**
 * 1. Do not accumulate the node.val in the path array,
 * but directly use the node.val as the index of the path array to count its frequency.
 */
function pseudoPalindromicPaths(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let path = new Array(10).fill(0);
  let answer = 0;

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }

    path[node.val] = (path[node.val] ?? 0) + 1;

    if (!node.left && !node.right) {
      if (isPalindrome(path)) {
        answer++;
      }
    }

    dfs(node.left);
    dfs(node.right);
    path[node.val] = path[node.val] ? path[node.val] - 1 : 0;
  }

  dfs(root);

  return answer;
}
