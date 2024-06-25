// https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/description/

function isValidSerialization(preorder: string): boolean {
  let elements = preorder.split(",");

  let slot = 1;

  for (let ele of elements) {
    slot--;

    if (slot < 0) {
      return false;
    }

    if (ele !== "#") {
      slot += 2;
    }
  }

  return slot === 0;
}

function anotherSolution(preorder: string): boolean {
  let elements = preorder.split(",");

  let stack: string[] = [];

  for (let ele of elements) {
    stack.push(ele);

    while (stack.length > 2) {
      let num = stack[stack.length - 3];
      let p2 = stack[stack.length - 2];
      let p1 = stack[stack.length - 1];

      if (num !== "#" && p1 === "#" && p2 === "#") {
        stack = [...stack.splice(0, stack.length - 3), "#"];
      } else {
        break;
      }
    }
  }

  return stack.length === 1 && stack[0] === "#";
}

/**
 * !. it cannot solve if the case is invalid but not cut off during counting, e.g. "1,#"
 */
function wrongAnswer(preorder: string): boolean {
  let elements = preorder.split(",");

  function count(start: number, end: number): number {
    if (start > end) {
      return 0;
    }

    let node = elements[start];

    console.log(node, start, end);

    if (node === "#") {
      return 1;
    }

    let left = count(start + 1, end);
    let right = count(start + left + 1, end);

    return left + right + 1;
  }

  let total = count(0, elements.length - 1);

  console.log(total, elements.length);

  return total === elements.length;
}
