# Stable vs Unstable Sorting Algorithms

Sorting algorithms are used to arrange a set of data in a particular order. There are two types of sorting algorithms: stable and unstable. The difference between the two is how they handle elements with the same value.

## Stable Sorting Algorithms

Stable sorting algorithms are algorithms that maintain the relative order of elements with equal values. This means that if two elements have the same value, the one that appears first in the original list will appear first in the sorted list. Stable sorting algorithms are useful when the order of equal elements is important.

## Unstable Sorting Algorithms

Unstable sorting algorithms are algorithms that do not maintain the relative order of elements with equal values. This means that if two elements have the same value, their order in the sorted list is not guaranteed to be the same as their order in the original list. Unstable sorting algorithms are useful when the order of equal elements is not important.

## Examples of Stable Sorting Algorithms

1. **Insertion Sort**

Insertion Sort is a stable sorting algorithm that builds the final sorted list one item at a time. It works by comparing each item with the items before it and inserting it into the correct position.

2. **Merge Sort**

Merge Sort is a stable sorting algorithm that divides the list into smaller sub-lists, sorts the sub-lists, and then merges them back together.

## Examples of Unstable Sorting Algorithms

1. **Selection Sort**

Selection Sort is an unstable sorting algorithm that sorts an array by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning.

2. **Quick Sort**

Quick Sort is an unstable sorting algorithm that selects an element as a pivot and partitions the array around the pivot. It then recursively sorts the two sub-arrays.

## Conclusion

In conclusion, stable and unstable sorting algorithms differ in how they handle elements with the same value. Stable sorting algorithms maintain the relative order of equal elements, while unstable sorting algorithms do not. The choice between stable and unstable sorting algorithms depends on the requirements of the problem at hand. If the order of equal elements is important, a stable sorting algorithm should be used. If the order of equal elements is not important, an unstable sorting algorithm can be used to improve performance.