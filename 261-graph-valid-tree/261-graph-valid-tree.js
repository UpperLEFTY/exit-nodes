/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const validTree = function(n, edges) {
 if (edges.length !== n - 1) {
   return false
 }
 const graph = {}
 edges.forEach(edge => {
   if (!graph[edge[0]]) {
     graph[edge[0]] = []
   }
   if (!graph[edge[1]]) {
     graph[edge[1]] = []
   }
   graph[edge[0]].push(edge[1])
   graph[edge[1]].push(edge[0])
 })
 const queue = [0],
   visited = new Set()
 while (queue.length) {
   const currentNode = queue.shift()
   visited.add(currentNode)
   if (graph[currentNode]) {
     graph[currentNode].forEach(node => {
       if (!visited.has(node)) {
         queue.push(node)
       }
     })
   }
 }
 return visited.size === n
}