# Insertion Sort Algorithm

Insertion sort is a simple and efficient sorting algorithm that works by sorting an array one element at a time. It is an in-place sorting algorithm, which means it does not require any extra memory to store the sorted elements. The insertion sort algorithm is easy to implement and is efficient for small datasets.

## How Insertion Sort Works

The insertion sort algorithm works by dividing the input array into two parts: the sorted part and the unsorted part. Initially, the first element of the array is considered as the sorted part, and the remaining elements are considered as the unsorted part. The algorithm then iterates over the unsorted part of the array and inserts each element into its correct position in the sorted part of the array.

The insertion sort algorithm works as follows:

1. Iterate over the unsorted part of the array.
2. For each element in the unsorted part of the array, compare it with the elements in the sorted part of the array.
3. Insert the element into its correct position in the sorted part of the array.
4. Repeat steps 2 and 3 until all the elements in the unsorted part of the array are sorted.

## Pseudocode for Insertion Sort

```
for i from 1 to n-1
    key = a[i]
    j = i - 1
    while j >= 0 and a[j] > key
        a[j+1] = a[j]
        j = j - 1
    end while
    a[j+1] = key
end for
```

## Time Complexity of Insertion Sort

The time complexity of the insertion sort algorithm is O(n^2), where n is the number of elements in the array. This is because the algorithm compares each element in the unsorted part of the array with each element in the sorted part of the array. The worst-case time complexity of the insertion sort algorithm occurs when the input array is in reverse order.

## Conclusion

In conclusion, the insertion sort algorithm is a simple and efficient sorting algorithm that works by sorting an array one element at a time. The algorithm divides the input array into two parts: the sorted part and the unsorted part, and iterates over the unsorted part of the array, inserting each element into its correct position in the sorted part of the array. The time complexity of the insertion sort algorithm is O(n^2), where n is the number of elements in the array. The insertion sort algorithm is useful for sorting small datasets efficiently.