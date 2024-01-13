# Selection Sort Algorithm

Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning of the array. Selection sort is an in-place comparison-based algorithm that has a time complexity of O(n^2) in its worst case.

## How Selection Sort Works

The selection sort algorithm works by dividing the input array into two parts: sorted and unsorted. Initially, the sorted part is empty, and the unsorted part is the entire array. In each iteration, the algorithm finds the minimum element from the unsorted part of the array and swaps it with the first element of the unsorted part. This way, the minimum element is placed at the beginning of the array, and the sorted part is extended by one element. The process is repeated until the entire array is sorted.

## Pseudo Code

```
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}
```

## Example

Let's say we have an unsorted array of numbers `[3, 2, 5, 1, 4]`. Here's how selection sort would sort the array step by step:

1. The first iteration would find the minimum element of the unsorted part of the array, which is 1. It would then swap it with the first element of the unsorted part of the array. The array would now look like this: `[1, 2, 5, 3, 4]`.
2. The second iteration would find the minimum element of the unsorted part of the array, which is 2. It would then swap it with the second element of the unsorted part of the array. The array would now look like this: `[1, 2, 5, 3, 4]`.
3. The third iteration would find the minimum element of the unsorted part of the array, which is 3. It would then swap it with the third element of the unsorted part of the array. The array would now look like this: `[1, 2, 3, 5, 4]`.
4. The fourth iteration would find the minimum element of the unsorted part of the array, which is 4. It would then swap it with the fourth element of the unsorted part of the array. The array would now look like this: `[1, 2, 3, 4, 5]`.
5. The fifth and final iteration would find that the array is sorted and end the algorithm.

## Conclusion

In conclusion, selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning of the array. Selection sort is an in-place comparison-based algorithm that has a time complexity of O(n^2) in its worst case. While selection sort is not the most efficient sorting algorithm, it is easy to implement and is useful for small arrays or arrays that are already partially sorted.