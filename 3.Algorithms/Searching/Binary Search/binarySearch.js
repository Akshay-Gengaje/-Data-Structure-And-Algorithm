/*
    - Binary search is a searching technique that is based upon the Divide-and-Conquer Rule.

    - In this searching technique, a sorted array is divided into two equal halves and then the same technique is applied onto the two halves searching for the element by comparing the high and the low.
 
    # Working of binary search

        - For Binary Search to be performed on any array, the array must be already sorted in any format, that is, either ascending or descending.
        - Find the middle index of the array/list.
        - If the middle element is equal to the search element, Stop Searching.
        - If the element that is to be searched is less then the middle element then consider the first half as a separate list.
        - Else-If the element that is to be searched is larger then the middle element then consider the second half as a separate list.
        - Repeat Step 2-3-4-5 Until desired result is found.
*/

function binarySearch(arr, item) {
  /* 2. Find the middle of the array
    Formula - M =  {L+R/2} or M = {L + (R - L) / 2}
  */
 
}

// 1. the array must be already sorted any format, that is, either ascending or descending
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
