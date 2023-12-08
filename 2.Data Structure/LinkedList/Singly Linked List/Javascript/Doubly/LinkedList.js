class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.lenght++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.lenght++;
  }

  insert(index, value) {
    const newNode = new Node(value);

    if (index === 0) {
      // Insert at the beginning of the list
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (index >= this.length) {
      // Insert at or beyond the end of the list
      this.append(value);
    } else {
      // Insert at a specific index
      const leader = this.traverseToIndex(index - 1);
      const follower = leader.next;

      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
    }

    this.length++;
  }

  remove() {}

  traverseToIndex(index) {
    if (index === 0) {
      return this.head;
    }
    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const LinkedList = new DoublyLinkedList(5);

LinkedList.append(7);
LinkedList.append(8);
LinkedList.append(9);
LinkedList.prepend(4);
// LinkedList.prepend(3);
// LinkedList.prepend(2);
// LinkedList.prepend(1);
// LinkedList.insert(6, 6);
const list = LinkedList.printList();

console.log(list);
