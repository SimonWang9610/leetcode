import { TreeNode, TreeBuilder } from "../../datastructure/tree_node";

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let result = 0;

  function traverse(node: TreeNode | null) {
    if (!node || node.val === null) {
      return;
    }

    if (node.val < low) {
      traverse(node.right);
      return;
    }

    if (node.val > high) {
      traverse(node.left);
      return;
    }

    result += node.val;

    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);

  return result;
}

function test() {
  let arr = [10, 5, 15, 3, 7, 13, 18, 1, null, 6];
  let root = TreeBuilder.fromPreOrder(arr);
  console.log(rangeSumBST(root, 6, 10)); // 32
}

test();
