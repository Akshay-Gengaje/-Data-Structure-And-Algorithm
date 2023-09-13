/* 
  -Linear time complexity, denoted as O(n), is a term used in computer science to describe an algorithm or process whose 
time complexity or running time increases linearly with the size of the input data set.
 -This means that if the input size doubles, the time taken by the algorithm also doubles. Similarly,
if the input size triples, the time taken by the algorithm also triples, and so on.
 -For example, consider a simple for loop that iterates over an array of n elements. The loop will run n times, 
 so the time complexity is O(n). This is an example of linear time complexity.
 */
const nemo = ["nemo"];

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

findNemo(nemo);
