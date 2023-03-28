/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function(n, edges) {
 if(n === 1) return [0]
 const res = [], graph = {}
 for(const [u, v] of edges) {
   if(graph[u] == null) graph[u] = new Set()
   if(graph[v] == null) graph[v] = new Set()
   graph[u].add(v)
   graph[v].add(u)
 }
 let leaves = []
 Object.keys(graph).forEach(k => {
   if(graph[k].size === 1) leaves.push(+k)
 })
 while(n > 2) {
   const newLeaves = []
   const size = leaves.length
   for (let i = 0; i < size; i++) {
     const cur = leaves.pop()
     for (const next of graph[cur]) {
       graph[next].delete(cur)
       if(graph[next].size === 1) newLeaves.push(next)
     }
   }
   n -= size
   leaves = newLeaves
 }
 
 return leaves
};