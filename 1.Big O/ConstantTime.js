/*
  - Constant time complexity, denoted as O(1), is a term used in computer science to describe an algorithm or 
process whose time complexity or running time is constant and does not grow with the size of the input data set. 
  - This means that no matter how large the input data set is, the time taken by the algorithm remains the same. 
*/
const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);
  console.log(boxes[1]);
}

logFirstTwoBoxes(boxes);
