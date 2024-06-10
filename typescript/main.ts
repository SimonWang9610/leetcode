class NestedInteger {
  isInteger(): boolean {
    return true;
  }
  getInteger(): number {
    return 1;
  }
  getList(): NestedInteger[] {
    return [];
  }
}

class NestedIterator {
  current: NestedInteger | null;
  gen: Generator<number>;

  constructor(nestedList: NestedInteger[]) {
    this.gen = this.generator(nestedList);
    this.current = nestedList[0];
  }

  hasNext(): boolean {
    return this.current !== null;
  }

  next(): number {
    return this.gen.next().value;
  }

  *generator(nestedList: NestedInteger[]): Generator<number> {
    for (let nested of nestedList) {
      this.current = nested;

      if (nested.isInteger()) {
        yield nested.getInteger();
      } else {
        yield* this.generator(nested.getList());
      }
    }

    this.current = null;
  }
}
