class LinkedList {
  #Node = class {
    value;
    next;
    constructor(value) {
      this.value = value;
    }
  };
  #length = 0;
  head = null;

  constructor() {}

  log(action, input) {
    console.log({ action, input });
  }

  insert(index, value) {
    let _index = 0;
    let node = this.head;
    while (_index < index - 1) {
      node = node.next;
      _index++;
    }

    const newNode = new this.#Node(value);
    newNode.next = node.next;
    node.next = newNode;

    this.#length++;
    return this;
  }

  insertFirst(value) {
    this.log(this.insertFirst.name, { value });
    const node = new this.#Node(value);
    if (this.head) {
      node.next = this.head;
    }

    this.head = node;
    this.#length++;
    return this;
  }

  insertLast(value) {
    this.log(this.insertLast.name, { value });

    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    const newNode = new this.#Node(value);
    node.next = newNode;
    this.#length++;
    return this;
  }

  toArray() {
    const array = [];
    let node = this.head;
    while (node) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }

  display() {
    console.log(this.toArray());
    return this;
  }

  delete(index) {
    this.log(this.delete.name, { index });
    let node = this.get(index - 1);
    node.next = node.next.next;
    return this;
  }

  deleteFirst() {
    this.log(this.deleteFirst.name);
    if (this.head) this.head = this.head.next;
    this.#length--;
    return this;
  }

  deleteLast() {
    this.log(this.deleteLast.name);
    if (!this.head) return this;
    let node = this.get(this.#length - 2);
    node.next = null;
    this.#length--;
    return this;
  }

  indexOf(value) {}

  get(_index) {
    if (_index == 0) return this.head;

    if (_index > this.#length - 1) new Error("Index Out Of Bounds");

    let node = this.head;
    for (let index = 0; index < _index; index++) {
      node = node.next;
    }

    return node;
  }
}

module.exports = {
  LinkedList,
};
