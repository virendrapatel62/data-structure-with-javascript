class DoublyLinkedList {
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

  constructor() {}

  log(action, input) {
    console.log({ action, input });
  }

  insert(index, value) {
    this.log(this.insert.name, { value, index });

    const node = new this.#Node(value);
    const prevNode = this.get(index - 1);
    prevNode.next.prev = node;
    node.next = prevNode.next;
    prevNode.next = node;
    node.prev = prevNode;

    this.#length++;
    return this;
  }

  insertFirst(value) {
    this.log(this.insertFirst.name, { value });
    const node = new this.#Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;

      node.next = null;
      node.prev = null;
    } else {
      node.next = this.head;
      this.head.prev = node;
      node.prev = null;
      this.head = node;
    }

    this.#length++;
    return this;
  }

  insertLast(value) {
    this.log(this.insertLast.name, { value });
    const node = new this.#Node(value);

    node.next = null;
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;

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

  toArrayReverse() {
    const array = [];
    let node = this.tail;
    while (node) {
      array.push(node.value);
      node = node.prev;
    }
    return array;
  }

  display() {
    console.log(this.toArray().toString());
    console.log(this.toArrayReverse().toString());
    return this;
  }

  delete(index) {
    this.log(this.delete.name, { index });

    if (index == 0) return this.deleteFirst();

    if (index == this.#length - 1) {
      return this.deleteLast();
    }

    console.log({ index, l: this.#length });

    const node = this.get(index - 1);

    node.next.next.prev = node;
    node.next = node.next.next;

    this.#length--;

    return this;
  }

  deleteFirst() {
    this.log(this.deleteFirst.name);

    if (!this.head) return this;

    this.head.next.prev = null;
    this.head = this.head.next;

    this.#length--;
    return this;
  }

  deleteLast() {
    this.log(this.deleteLast.name);

    if (!this.head) return this;

    this.tail.prev.next = null;
    this.tail = this.tail.prev;

    this.#length--;
    return this;
  }

  indexOf(value) {}

  get(_index) {
    if (_index == 0) return this.head;

    if (_index > this.#length - 1) new Error("Index Out Of Bounds");
    let node = this.head;
    for (let i = 0; i < _index; i++) {
      node = node.next;
    }

    return node;
  }
}

module.exports = {
  DoublyLinkedList,
};
