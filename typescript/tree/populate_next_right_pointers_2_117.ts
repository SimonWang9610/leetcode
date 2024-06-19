// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/

class _Node {
  val: number;
  left: _Node | null;
  right: _Node | null;
  next: _Node | null;
  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 1. Always ensure the right subtree is connected, so that the left subtree can always find the next node until null;
 *  otherwise, the left subtree will fail to be populated as the next of right subtree is not ready.
 */
function connect(root: _Node | null): _Node | null {
  if (!root) {
    return null;
  }

  function dfs(node: _Node | null) {
    if (!node) {
      return;
    }

    if (node.left) {
      if (node.right) {
        node.left.next = node.right;
      } else {
        let current: _Node | null = node;

        while (current) {
          current = current.next;
          node.left.next = current?.left ?? current?.right ?? null;

          if (node.left.next) {
            break;
          }
        }
      }
    }

    if (node.right) {
      let current: _Node | null = node;

      while (current) {
        current = current.next;
        node.right.next = current?.left ?? current?.right ?? null;

        if (node.right.next) {
          break;
        }
      }
    }

    dfs(node.right);
    dfs(node.left);
  }

  dfs(root);

  root.next = null;

  return root;
}
