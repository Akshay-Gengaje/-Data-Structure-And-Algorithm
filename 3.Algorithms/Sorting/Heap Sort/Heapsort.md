# Heap Sort

Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure. Heap sort is an efficient and stable sorting algorithm with a worst-case time complexity of O(n log n). Heap sort works by building a binary heap from the array to be sorted and then repeatedly extracting the maximum element from the heap and placing it at the end of the array. 

## Link
refer the link for more info: https://brilliant.org/wiki/heap-sort/

## Binary Heap

A binary heap is a binary tree data structure that satisfies the heap property. The heap property states that for each node in the heap, the value of the parent node must be greater than or equal to the value of the child nodes. In a binary heap, the maximum element is always at the root of the tree.

## Heap Sort Algorithm

The heap sort algorithm works as follows:

1. Build a binary heap from the array to be sorted.
2. Remove the root element from the binary heap and place it at the end of the array.
3. Heapify the remaining binary heap to maintain the heap property.
4. Repeat steps 2 and 3 until the binary heap is empty.
5. The array is now sorted.

## Implementation

Here is an implementation of heap sort in JavaScript:

```
function heapSort(array) {
  buildMaxHeap(array);

  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    heapify(array, 0, i);
  }

  return array;
}

function buildMaxHeap(array) {
  const start = Math.floor(array.length / 2) - 1;

  for (let i = start; i >= 0; i--) {
    heapify(array, i, array.length);
  }
}

function heapify(array, index, heapSize) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largest = index;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
```

## Conclusion

In conclusion, heap sort is a comparison-based sorting algorithm that uses a binary heap data structure. Heap sort is an efficient and stable sorting algorithm with a worst-case time complexity of O(n log n). Heap sort works by building a binary heap from the array to be sorted and then repeatedly extracting the maximum element from the heap and placing it at the end of the array. Heap sort is widely used in computer science and is an important algorithm to understand.

