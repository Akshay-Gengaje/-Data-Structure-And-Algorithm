# Merge Sort Algorithm

Merge sort is a sorting algorithm that uses the divide-and-conquer approach to sort an array or a list. It divides the input list into two halves, sorts each half recursively, and then merges the sorted halves to produce the final sorted list. Merge sort is a stable, efficient, and general-purpose sorting algorithm that has a time complexity of O(nlogn) in the worst-case scenario.

## How Merge Sort Works

Merge sort works by dividing the input array into two halves, sorting each half recursively, and then merging the sorted halves to produce the final sorted array. The steps involved in the merge sort algorithm are as follows:

1. **Divide** the unsorted array into two halves, by finding the middle index of the array.
2. **Conquer** the left and right halves recursively, by calling the merge sort function on each half until the base case is reached (when the array has only one element).
3. **Combine** the sorted left and right halves by merging them in sorted order to produce the final sorted array.

## Pseudocode for Merge Sort

The pseudocode for the merge sort algorithm is as follows:

```
function mergeSort(arr)
  if arr.length <= 1
    return arr
  else
    middle = floor(arr.length / 2)
    left = mergeSort(arr[0...middle-1])
    right = mergeSort(arr[middle...arr.length])
    return merge(left, right)

function merge(left, right)
  result = []
  while left.length > 0 and right.length > 0
    if left[0] <= right[0]
      result.push(left[0])
      left = left[1...left.length]
    else
      result.push(right[0])
      right = right[1...right.length]
  if left.length > 0
    result.push(left)
  if right.length > 0
    result.push(right)
  return result
```

## Complexity of Merge Sort

The time complexity of merge sort is O(nlogn) in the worst-case scenario. This is because the algorithm divides the input array into two halves at each level of recursion, and the merging step takes O(n) time. The space complexity of merge sort is O(n) because it creates temporary arrays to store the sorted halves.

## Conclusion

In conclusion, merge sort is a sorting algorithm that uses the divide-and-conquer approach to sort an array or a list. It works by dividing the input array into two halves, sorting each half recursively, and then merging the sorted halves to produce the final sorted array. Merge sort is a stable, efficient, and general-purpose sorting algorithm that has a time complexity of O(nlogn) in the worst-case scenario.