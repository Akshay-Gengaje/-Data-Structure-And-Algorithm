/*
Linear Search is a sequential search algorithm.
    - In Linear Search, we’ll have to traverse the array comparing the elements consecutively one after the other
    Until the target value is found.
    - Linear Search has a high time complexity making at most n comparison
    - Hence, it is only suitable to search for elements in a small and unsorted list of elements

    | Time Complexity  | O(n)
    | Best Case	       | O(1)
    | Worst Case	   | O(n)
    | Space Complexity | O(1)
    | Avg. Comparisons | (n+1)/2

    
*/

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    //O(n)
    if (arr[i] === item) {
      console.log(item + " Found at index : " + i);
      return;
    }
  }
  console.log("Item not found");
}

const ans = linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],4);
