class CircularLinkedList {
  #Node = class {
    value;
    next;
    prev;
    constructor(value) {
      this.value = value;
    }
  };
  #length = 0;
  head = null;
  tail = null;

  log(action, input) {
    console.log({ action, input });
  }

  insert(index, value) {
    this.log(this.insert.name, { value, index });

    return this;
  }

  insertFirst(value) {
    this.log(this.insertFirst.name, { value });
    const node = new this.#Node(value);

    if (this.head) {
      this.tail.next = node;
      this.head.prev = node;
      node.prev = this.tail;
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
      this.tail.next = this.head;
      this.tail.prev = this.head;
      this.head.prev = this.tail;
      this.head.next = this.tail;
    }

    this.#length++;

    return this;
  }

  insertLast(value) {
    this.log(this.insertLast.name, { value });
    const node = new this.#Node(value);

    return this;
  }

  toArray() {
    const array = [];
    let node = this.head;
    while (node) {
      array.push(node.value);
      if (node.next == this.head) break;
      node = node.next;
    }
    return array;
  }

  toArrayReverse() {
    const array = [];
    let node = this.tail;
    while (node) {
      array.push(node.value);
      if (node.prev == this.tail) break;

      node = node.prev;
    }
    return array;
  }

  display() {
    console.log("-------");
    console.log(this.toArray().toString());
    console.log(this.toArrayReverse().toString());
    console.log("--------");
    return this;
  }

  delete(index) {
    this.log(this.delete.name, { index });

    return this;
  }

  deleteFirst() {
    this.log(this.deleteFirst.name);

    return this;
  }

  deleteLast() {
    this.log(this.deleteLast.name);

    return this;
  }

  indexOf(value) {}

  get(_index) {
    if (_index == 0) return this.head;

    if (_index > this.#length - 1) return null;
    let node = this.head;
    for (let i = 0; i < _index; i++) {
      node = node.next;
    }

    return node;
  }
}

module.exports = {
  CircularLinkedList,
};
