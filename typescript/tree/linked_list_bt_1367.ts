import { ListNode } from "../../datastructure/list_node";
import { TreeNode } from "../../datastructure/tree_node";
// https://leetcode.com/problems/linked-list-in-binary-tree/description/

// similar question:
// https://leetcode.com/problems/path-sum-iii/description/

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  if (!root) {
    return head === null;
  }

  function compare(node: TreeNode | null, list: ListNode | null): boolean {
    if (!list) {
      return true;
    }

    if (!node) {
      return false;
    }

    return (
      node.val === list.val &&
      (compare(node.left, list.next) || compare(node.right, list.next))
    );
  }

  return (
    compare(root, head) ||
    isSubPath(head, root.left) ||
    isSubPath(head, root.right)
  );
}

function anotherSolution(
  head: ListNode | null,
  root: TreeNode | null
): boolean {
  if (!root) {
    return head === null;
  }

  let path = "";
  let list = head;

  while (list) {
    path += `${list.val}-`;
    list = list.next;
  }

  let found = false;

  function compare(node: TreeNode | null, current: string) {
    if (!node || current.length > path.length || found) {
      return;
    }

    current += `${node.val}-`;

    if (current === path) {
      found = true;
      return;
    }

    compare(node.left, current);
    compare(node.right, current);
  }

  function dfs(node: TreeNode | null) {
    if (!node || found) {
      return;
    }

    compare(node, "");

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return found;
}
