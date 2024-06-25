class LockingTree {
  locked: Record<number, number | null>;
  tree: Record<number, number[]>;
  parent: number[];

  constructor(parent: number[]) {
    let tree: Record<number, number[]> = {};
    let locked: Record<number, number | null> = {};

    for (let i = 1; i < parent.length; i++) {
      let p = parent[i];

      if (!tree[p]) {
        tree[p] = [i];
      } else {
        tree[p].push(i);
      }

      if (!tree[i]) {
        tree[i] = [];
      }

      locked[i] = null;
    }

    console.log(tree);

    this.locked = locked;
    this.tree = tree;
    this.parent = parent;
  }

  lock(num: number, user: number): boolean {
    let lock = this.locked[num];

    if (lock) {
      return false;
    } else {
      this.locked[num] = user;
      return true;
    }
  }

  unlock(num: number, user: number): boolean {
    let lock = this.locked[num];

    if (lock !== user) {
      return false;
    } else {
      this.locked[num] = null;
      return true;
    }
  }

  upgrade(num: number, user: number): boolean {
    let lock = this.locked[num];

    if (lock) {
      return false;
    }

    let p = this.parent[num];

    while (p >= 0) {
      let lock = this.locked[p];

      if (lock) {
        return false;
      } else {
        p = this.parent[p];
      }
    }

    console.log(`num: ${num}, parent not locked`);

    let children: number[] = this.tree[num];

    let unlocked = 0;

    while (children.length > 0) {
      let count = children.length;

      for (let i = 0; i < count; i++) {
        let child = children.shift()!;

        if (this.locked[child]) {
          this.locked[child] = null;
          unlocked++;
        }

        if (this.tree[child]) {
          children.push(...this.tree[child]);
        }
      }
    }

    if (unlocked) {
      this.locked[num] = user;
    }

    return unlocked > 0;
  }
}

function main() {
  let tree = new LockingTree([-1, 0, 3, 4, 7, 4, 3, 0, 1, 8]);

  tree.lock(1, 1);
  tree.upgrade(3, 8);
}

main();
