class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
    Stack Methods - 
    1. Push
    2. Pop
    3. Peek / Top
    4. isEmpty
    5. Print Stack
    6. size 
*/
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // Peek / Top
  peek() {
    return this.top;
  }
  // Push
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
  }

  //Pop
  pop() {
    if (this.isEmpty) {
      return "Stack is Empty";
    }
    if (this.top === this.bottom) {
      this.bottom === null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
  //isEmpty
  isEmpty() {
    return this.top === null;
  }

  //Print Stack
  printStack() {
    if (this.isEmpty) {
      return "Stack is empty";
    }
    let current = this.top;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("udemy");
myStack.push("youtube");
// console.log(myStack);
myStack.printStack();
