# Depth-First Search Algorithm

Depth-first search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. DFS is one of the most fundamental graph algorithms and is used as a subroutine in many other graph algorithms. DFS can be used to solve many graph problems, such as finding connected components, detecting cycles, and solving mazes.

## Algorithm

The DFS algorithm works by visiting vertices in a graph and marking them as visited. The algorithm starts at a root vertex and explores as far as possible along each branch before backtracking. DFS can be implemented recursively or iteratively.

### Recursive implementation

```
function dfsRecursive(graph, vertex, visited) {
  visited[vertex] = true;

  for (let i = 0; i < graph[vertex].length; i++) {
    const neighbor = graph[vertex][i];
    if (!visited[neighbor]) {
      dfsRecursive(graph, neighbor, visited);
    }
  }
}
```

### Iterative implementation

```
function dfsIterative(graph, start) {
  const visited = {};
  const stack = [start];
  visited[start] = true;

  while (stack.length > 0) {
    const vertex = stack.pop();

    for (let i = 0; i < graph[vertex].length; i++) {
      const neighbor = graph[vertex][i];
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    }
  }

  return visited;
}
```

## Applications

DFS has many applications in computer science and is used to solve many graph problems, such as:

- Finding connected components in a graph.
- Detecting cycles in a graph.
- Solving mazes.
- Topological sorting.
- Finding paths between two vertices.
- Finding strongly connected components in a directed graph.

## Conclusion

In conclusion, DFS is a fundamental graph traversal algorithm that explores as far as possible along each branch before backtracking. DFS can be implemented recursively or iteratively and is used to solve many graph problems. DFS is an important algorithm to understand and is widely used in computer science.