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

    if (index == 0) return this.insertFirst(value);

    if (index == this.#length - 1) return this.insertLast(value);

    const nodeBeforeIndex = this.get(index - 1);
    const newNode = new this.#Node(value);
    newNode.next = nodeBeforeIndex.next;
    newNode.prev = nodeBeforeIndex;
    nodeBeforeIndex.next.prev = newNode;
    nodeBeforeIndex.next = newNode;
    this.#length++;

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
    const newNode = new this.#Node(value);
    newNode.prev = this.tail;
    newNode.next = this.head;
    this.head.prev = newNode;
    this.tail.next = newNode;
    this.tail = newNode;
    this.#length++;
    return this;
  }

  toArray() {
    let i = 0;
    const array = [];
    let node = this.head;
    while (node) {
      array.push(node.value);
      if (node.next == this.head) break;
      node = node.next;
      i++;

      if (i > this.#length) break;
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
    console.log({ length: this.#length });
    console.log("--------");
    return this;
  }

  delete(index) {
    this.log(this.delete.name, { index });

    if (index == 0) return this.deleteFirst();

    if (index == this.#length - 1) return this.deleteLast();

    const node = this.get(index);

    node.next.prev = node.prev;
    node.prev.next = node.next;

    this.#length--;

    return this;
  }

  deleteFirst() {
    this.log(this.deleteFirst.name);
    const newHead = this.head.next;
    newHead.prev = this.tail;
    this.tail.next = newHead;
    this.head = newHead;
    this.#length--;
    return this;
  }

  deleteLast() {
    this.log(this.deleteLast.name);
    const newTail = this.tail.prev;
    newTail.next = this.head;
    this.head.prev = newTail;
    this.tail = newTail;

    this.#length--;
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
