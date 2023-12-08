**Stack Data Structure:**
A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, meaning the last element added is the first one to be removed. Think of it as a collection of elements with two main operations: push, which adds an element to the top of the stack, and pop, which removes the top element.

**Comparison with Other Data Structures:**

| Criteria           | Stack                                                            | Queue                        | Linked List               | Array                             |
| ------------------ | ---------------------------------------------------------------- | ---------------------------- | ------------------------- | --------------------------------- |
| Order              | LIFO                                                             | FIFO                         | Linear                    | Linear                            |
| Insertion/Deletion | O(1)                                                             | O(1)                         | O(1)                      | O(n)                              |
| Random Access      | No                                                               | No                           | Yes                       | Yes                               |
| Space Efficiency   | Moderate                                                         | Moderate                     | Moderate                  | High                              |
| Use Cases          | Function call management, Undo mechanisms, Expression evaluation | Task scheduling, Print queue | Dynamic memory allocation | Static storage, Search algorithms |

**Advantages:**

1. Simple and easy to implement.
2. Provides constant time for insertion and deletion operations.
3. Memory management is straightforward.

**Disadvantages:**

1. Limited in functionality compared to other data structures like arrays and linked lists.
2. Fixed size in some implementations, which can lead to overflow or underflow.
3. Lacks efficient random access to elements.

**Time Complexity:**

- Push: O(1)
- Pop: O(1)
- Peek/Top: O(1)

**Space Complexity:**

- O(n), where n is the number of elements in the stack.

**Where it is Used:**

1. Function call management (call stack).
2. Undo mechanisms in applications.
3. Expression evaluation and parsing.
4. Backtracking algorithms.
5. Memory management (used in undo mechanisms).
6. Parsing (used in compilers).
7. Evaluating expressions.
8. Recursion.
9. Backup and restore operations.

Certainly! Here are implementations of a stack in JavaScript using both an array and a linked list:

**Implementation using Array:**

```javascript
class StackArray {
  constructor() {
    this.items = [];
  }

  // Push: Adds an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop: Removes and returns the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Peek/Top: Returns the top element without removing it
  peek() {
    return this.isEmpty()
      ? "Stack is empty"
      : this.items[this.items.length - 1];
  }

  // isEmpty: Checks if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print: Displays the elements of the stack
  print() {
    return this.items.join(" ");
  }
}

// Example usage:
let stackArray = new StackArray();
stackArray.push(10);
stackArray.push(20);
stackArray.push(30);
console.log(stackArray.print()); // Output: 10 20 30
console.log(stackArray.pop()); // Output: 30
console.log(stackArray.peek()); // Output: 20
console.log(stackArray.isEmpty()); // Output: false
```

**Implementation using Linked List:**

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
  }

  // Push: Adds an element to the top of the stack
  push(element) {
    let newNode = new Node(element);
    newNode.next = this.top;
    this.top = newNode;
  }

  // Pop: Removes and returns the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    let popped = this.top;
    this.top = this.top.next;
    return popped.data;
  }

  // Peek/Top: Returns the top element without removing it
  peek() {
    return this.isEmpty() ? "Stack is empty" : this.top.data;
  }

  // isEmpty: Checks if the stack is empty
  isEmpty() {
    return this.top === null;
  }

  // Print: Displays the elements of the stack
  print() {
    let current = this.top;
    let result = [];
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(" ");
  }
}

// Example usage:
let stackLinkedList = new StackLinkedList();
stackLinkedList.push(10);
stackLinkedList.push(20);
stackLinkedList.push(30);
console.log(stackLinkedList.print()); // Output: 30 20 10
console.log(stackLinkedList.pop()); // Output: 30
console.log(stackLinkedList.peek()); // Output: 20
console.log(stackLinkedList.isEmpty()); // Output: false
```

In the linked list implementation, the `push` method adds a new node to the top, the `pop` method removes the top node, and the `peek` method returns the data of the top node.
