/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function(n, edges, source, destination) {
  // Create an adjacency list to represent the graph
  const adjacencyList = new Array(n).fill(0).map(() => []);

  // Build the adjacency list from the edges
  for (const [u, v] of edges) {
    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  }

  // Array to keep track of visited vertices
  const visited = new Array(n).fill(false);

  // Perform DFS from the source vertex
  function dfs(vertex) {
    // Mark the current vertex as visited
    visited[vertex] = true;

    // Check if the destination vertex is reached
    if (vertex === destination) {
      return true;
    }

    // Visit all adjacent vertices
    for (const neighbor of adjacencyList[vertex]) {
      if (!visited[neighbor]) {
        if (dfs(neighbor)) {
          return true;
        }
      }
    }

    return false;
  }

  // Start DFS from the source vertex
  return dfs(source);
}
