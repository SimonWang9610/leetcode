export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export namespace TreeBuilder {
  export function fromPreOrder(arr: any[]): TreeNode | null {
    if (arr.length === 0) {
      return null;
    }
    let root = new TreeNode(arr[0]);

    let stack = [
      {
        index: 0,
        node: root,
      },
    ];

    while (stack.length > 0) {
      let { index, node } = stack.pop()!;
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;

      if (arr[leftIndex] !== undefined) {
        let leftNode = new TreeNode(arr[leftIndex]);
        node.left = leftNode;
        stack.push({
          index: leftIndex,
          node: leftNode,
        });
      }

      if (arr[rightIndex] !== undefined) {
        let rightNode = new TreeNode(arr[rightIndex]);
        node.right = rightNode;
        stack.push({
          index: rightIndex,
          node: rightNode,
        });
      }
    }

    return root;
  }
}
