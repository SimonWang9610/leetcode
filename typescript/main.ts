import { TreeBuilder, TreeNode } from "./tree/tree_node";

function serialize(root: TreeNode | null): string {
  if (!root) {
    return "";
  }

  let answer = "";

  let queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    let count = queue.length;

    for (let i = 0; i < count; i++) {
      let node = queue.shift();

      if (!node) {
        answer += answer.length ? " -1" : "-1";
      } else {
        answer += answer.length
          ? ` ${node.val.toString(16)}`
          : `${node.val.toString(16)}`;

        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  return answer;
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  let elements = data.split(" ");

  if (!elements.length) {
    return null;
  }

  function build(index: number): TreeNode | null {
    let parsed = parseInt(elements[index], 16);

    if (parsed === -1) {
      return null;
    }

    return new TreeNode(parsed);
  }

  let root = build(0);

  if (!root) {
    return null;
  }

  let queue: { node: TreeNode | null; index: number }[] = [
    { node: root, index: 0 },
  ];

  while (queue.length > 0) {
    let { index, node } = queue.shift()!;

    if (!node) {
      continue;
    }

    let leftIndex = 2 * index + 1;
    let rightIndex = leftIndex + 1;

    if (leftIndex < elements.length) {
      let left = build(leftIndex);
      node.left = left;
      queue.push({
        node: left,
        index: leftIndex,
      });
    }

    if (rightIndex < elements.length) {
      let right = build(rightIndex);
      node.right = right;
      queue.push({
        node: right,
        index: rightIndex,
      });
    }
  }

  return root;
}

function test() {
  let testCase = [2, 1, 3];

  let root = TreeBuilder.fromPreOrder(testCase);

  let serialized = serialize(root);

  let deserialized = deserialize(serialized);
}
test();
