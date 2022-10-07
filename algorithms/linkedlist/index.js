const { LinkedList } = require("./linkded-list");
const { DoublyLinkedList } = require("./doubly-linked-list");
// const { LinkedList } = require("./linkded-list");

// const list = new LinkedList();
const list = new DoublyLinkedList();

list
  .insertFirst(12)
  .insertFirst(11)
  .insertFirst(10)
  .display()
  .insertLast(13)
  .insertLast(14)
  .insertLast(15)
  .display()
  .insert(2, 2)
  .insert(5, 5)
  .display()
  .deleteFirst()
  .deleteLast()
  .display()
  .delete(2)
  .delete(4)
  .display();

console.log(list.get(3));
