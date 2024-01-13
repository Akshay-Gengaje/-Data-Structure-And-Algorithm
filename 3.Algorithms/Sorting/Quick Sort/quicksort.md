# Quick Sort Algorithm

Quick sort is an efficient, recursive, and divide-and-conquer sorting algorithm that works by partitioning an array into two sub-arrays, then sorting the sub-arrays independently. Quick sort is widely used in computer science and is one of the fastest sorting algorithms available.

## How Quick Sort Works

Quick sort works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. The base case of the recursion is an array of size 0 or 1, which is already sorted.

The steps for quick sort are as follows:

1. Choose a pivot element from the array. This element will be used to partition the other elements into two sub-arrays.
2. Reorder the array so that all elements less than the pivot come before the pivot, and all elements greater than the pivot come after it. This step is called the partition operation.
3. Recursively apply the above steps to the sub-array of elements less than the pivot and the sub-array of elements greater than the pivot.
4. The base case of the recursion is an array of size 0 or 1, which is already sorted.

## Pseudo Code

```
function quickSort(array)
    if length(array) <= 1
        return array
    pivot = select any element of array
    left = [element for element in array if element < pivot]
    middle = [element for element in array if element == pivot]
    right = [element for element in array if element > pivot]
    return quickSort(left) + middle + quickSort(right)
```

## Complexity of Quick Sort

The best-case time complexity of quick sort is O(n log n). The worst-case time complexity is O(n^2), but this is rare and can be avoided by choosing a good pivot element. The average case time complexity is O(n log n). The space complexity of quick sort is O(log n) on average, but in the worst-case scenario, it can be O(n), which is due to the recursive nature of the algorithm.

## Conclusion

In conclusion, quick sort is an efficient, recursive, and divide-and-conquer sorting algorithm that works by partitioning an array into two sub-arrays, then sorting the sub-arrays independently. Quick sort is widely used in computer science and is one of the fastest sorting algorithms available. The best-case time complexity of quick sort is O(n log n), and the worst-case time complexity is O(n^2), but this is rare and can be avoided by choosing a good pivot element.