# Array vs Linked List

### Linked List vs Array

| Feature                    | Array                                                                                 | Linked List                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Memory allocation**      | Fixed at compile time                                                                 | Dynamic at runtime                                                                                            |
| **Storage of elements**    | Contiguous memory locations                                                           | Non-contiguous memory locations                                                                               |
| **Access to elements**     | Random access                                                                         | Sequential access                                                                                             |
| **Insertion and deletion** | Relatively slow                                                                       | Relatively fast                                                                                               |
| **Space overhead**         | Low                                                                                   | High (due to pointers)                                                                                        |
| **Best use cases**         | When the size of the data structure is known in advance and random access is required | When the size of the data structure is not known in advance or frequent insertions and deletions are required |

Here is a table summarizing the key differences between linked lists and arrays:

### Example

Suppose we have a list of names and we want to insert a new name into the list. If we are using an array, we would need to shift all of the elements in the array down to make room for the new element. This can be a time-consuming operation, especially if the array is large.

If we are using a linked list, we can simply create a new node and insert it into the list. This operation does not require any shifting of data, so it is much faster than inserting an element into an array.

### Conclusion

Linked lists and arrays are both useful data structures, but they have different strengths and weaknesses. Linked lists are better suited for applications where dynamic memory allocation and efficient insertion and deletion are required. Arrays are better suited for applications where random access and low space overhead are required.

Which data structure to use depends on the specific requirements of the application.

# Time and Space Complexity of Linked List vs Array

| Operation            | Linked List            | Array             |
| -------------------- | ---------------------- | ----------------- |
| **Search**           | O(n)                   | O(1)              |
| **Insertion**        | O(1)                   | O(n) (worst case) |
| **Deletion**         | O(1)                   | O(n) (worst case) |
| **Space complexity** | O(n) (due to pointers) | O(n)              |

**Time complexity** refers to the amount of time it takes to perform an operation on a data structure, as a function of the size of the data structure. **Space complexity** refers to the amount of memory required to store a data structure, as a function of the size of the data structure.

As you can see from the table above, linked lists have a better time complexity for insertion and deletion than arrays, but they have a worse time complexity for search. Linked lists also have a slightly higher space complexity than arrays, due to the need to store pointers to other nodes in the list.

In general, linked lists are a good choice for applications where dynamic memory allocation and efficient insertion and deletion are required. Arrays are a good choice for applications where random access and low space overhead are required.
