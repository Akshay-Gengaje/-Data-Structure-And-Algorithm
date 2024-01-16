# Breadth-First Search Algorithm

Breadth-first search (BFS) is an algorithm used to traverse or search a tree or graph data structure. It starts at the root node and explores all the neighboring nodes at the present depth level before moving on to the nodes at the next depth level. BFS is often used to find the shortest path between two nodes in an unweighted graph.

## Algorithm

The algorithm for breadth-first search is as follows:

1. Create a queue and enqueue the starting node.
2. Mark the starting node as visited.
3. While the queue is not empty, dequeue a node from the queue.
4. If the dequeued node is the target node, return it.
5. Otherwise, enqueue all the neighboring nodes of the dequeued node that have not been visited and mark them as visited.
6. If the queue is empty and the target node has not been found, return null.

## Example

Consider the following graph:

```
     1
   /   \
  2     3
 / \   / \
4   5 6   7
```

Starting at node 1, a breadth-first search would visit the nodes in the following order: 1, 2, 3, 4, 5, 6, 7.

## Implementation

Here is an implementation of breadth-first search in Python:

```
from collections import deque

def bfs(graph, start, target):
    queue = deque()
    queue.append(start)
    visited = set()
    visited.add(start)

    while queue:
        node = queue.popleft()

        if node == target:
            return node

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return None
```

This implementation uses a deque as the queue and a set to keep track of visited nodes. The graph is represented as a dictionary where the keys are the nodes and the values are lists of the neighboring nodes.

## Conclusion

In conclusion, breadth-first search is an algorithm used to traverse or search a tree or graph data structure. It starts at the root node and explores all the neighboring nodes at the present depth level before moving on to the nodes at the next depth level. BFS is often used to find the shortest path between two nodes in an unweighted graph.