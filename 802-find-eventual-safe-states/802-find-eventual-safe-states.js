/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function(graph) {
  const res = []
  if(graph == null || graph.length === 0) return res
  const n = graph.length
  const color = Array(n).fill(0)
  for(let i = 0; i < n; i++) {
    if(bt(graph, i, color)) res.push(i)
  }
  return res

  function bt(graph, start, color) {
    if(color[start] !== 0) return color[start] === 1
    color[start] = 2
    for(let next of graph[start]) {
      if(!bt(graph, next, color)) return false
    }
    color[start] = 1
    return true
  }
};
