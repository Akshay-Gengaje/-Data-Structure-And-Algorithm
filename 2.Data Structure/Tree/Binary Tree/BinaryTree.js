/*
    level 0 : 2^0 : 0 nodes 
    level 1 : 2^1 : 1 node
    level 2 : 2^2 : 3 nodes
    level 3 : 2^3 : 7 nodes


    Number of nodes = 2^level - 1
    log(nodes) = level
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // If there is no root node exist
    if (this.root === null) {
      this.root = newNode;
    }
    // if there already root present
    else {
      //compare the current node value with root node.
      let currentNode = this.root;
      //iterate till we don't found suitable position for the element
      while (true) {
        //compare the newNode value with currentNode if it is less the move to left
        if (value < currentNode.value) {
          // if current node left is null;
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          // else assign current node as left
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    //if there in no root
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }
}

const myBT = new BinarySearchTree();

myBT.insert(9);
myBT.insert(4);
myBT.insert(20);
myBT.insert(1);
myBT.insert(6);
myBT.insert(15);
myBT.insert(170);
console.log(myBT.lookup(9));
// console.log(JSON.stringify(traverse(myBT.root)));
/*
         9
     4      20   
  1    6  15   270
*/

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
