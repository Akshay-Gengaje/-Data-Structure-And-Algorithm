class Stack {
  constructor() {
    this.array = [];
  }
  top() {
    if (this.isEmpty === true) return "Array is Empty";
    return this.array[this.array.length - 1];
  }
  push(arg) {
    this.array.push(arg);
  }
  pop() {
    if (this.isEmpty) return "Array is empty!";
    else return this.array.pop();
  }
  isEmpty() {
    if (this.array.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const myStack = new Stack();

myStack.push("GOOGLE");
myStack.push("UDEMY");
myStack.push("Youtube");

console.log(myStack.top());
