/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const sumOfDistancesInTree = function(n, edges) {
  const graph = createGraph(n, edges)
  const counts = new Array(n).fill(0)
  const dists = new Array(n).fill(0)
  dists[0] = getCount(graph, 0, -1, counts).sum
  return transferDist(n, graph, 0, -1, counts, dists)
}

function transferDist(n, graph, u, pre, counts, dists) {
  if (pre >= 0) {
    const nRight = counts[u]
    const nLeft = n - nRight
    dists[u] = dists[pre] - nRight + nLeft
  }
  for (const v of graph[u]) {
    if (v !== pre) {
      transferDist(n, graph, v, u, counts, dists)
    }
  }
  return dists
}

function getCount(graph, u, pre, counts) {
  const output = { nNodes: 0, sum: 0 }
  for (const v of graph[u]) {
    if (v !== pre) {
      const result = getCount(graph, v, u, counts)
      output.nNodes += result.nNodes
      output.sum += result.nNodes + result.sum
    }
  }
  output.nNodes += 1
  counts[u] = output.nNodes
  return output
}

function createGraph(n, edges) {
  const graph = new Array(n).fill(null).map(() => [])
  for (const [u, v] of edges) {
    graph[u].push(v)
    graph[v].push(u)
  }
  return graph
} 