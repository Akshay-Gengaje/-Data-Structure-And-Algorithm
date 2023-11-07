# What is Linked list?

A linked list is a linear data structure that stores a collection of data elements dynamically. It is made up of a sequence of nodes, each of which contains a data element and a pointer to the next node in the sequence. The last node in the list has a pointer to null, which marks the end of the list.

Linked lists are a versatile data structure that can be used to implement a variety of other data structures, such as stacks, queues, and hash tables. They are also useful for storing data that needs to be inserted or deleted frequently, as they do not require the data to be contiguous in memory.

Here is a diagram of a linked list:

```
node1 -> node2 -> node3 -> null
```

Where each node contains a data element and a pointer to the next node in the list.

**Advantages of linked lists:**

- Dynamic memory allocation: Linked lists do not require a fixed amount of memory to be allocated at the time of creation. Instead, memory is allocated dynamically as needed.
- Insertion and deletion: Insertions and deletions can be performed efficiently in linked lists, as they do not require any shifting of data.
- Versatility: Linked lists can be used to implement a variety of other data structures, such as stacks, queues, and hash tables.

**Disadvantages of linked lists:**

- Sequential access: Linked lists must be accessed sequentially, which can be slow for operations that require accessing random elements in the list.
- Memory overhead: Linked lists require additional memory for storing pointers to other nodes in the list.

**Types of linked lists:**

- Singly linked list: A singly linked list is the simplest type of linked list. Each node in a singly linked list contains a data element and a pointer to the next node in the list.
- Doubly linked list: A doubly linked list is similar to a singly linked list, but each node contains an additional pointer to the previous node in the list.
- Circular linked list: A circular linked list is a linked list where the last node points to the first node in the list, forming a loop.
- Circular doubly linked list: A circular doubly linked list is similar to a circular linked list, but each node contains an additional pointer to the previous node in the list.

Linked lists are a fundamental data structure in computer science. They are used in a variety of applications, such as operating systems, compilers, and databases.
