/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function(numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0)
  const graph = {}
  for (let [course, prereq] of prerequisites) {
    indegree[course]++
    graph[prereq] === undefined
      ? (graph[prereq] = [course])
      : graph[prereq].push(course)
  }
  const queue = [],
    ans = []
  for (let i = 0; i < indegree.length; i++) if (!indegree[i]) queue.push(i)
  while (queue.length) {
    let cur = queue.shift()
    ans.push(cur)
    for (let neigbhors of graph[cur] || []) {
      if (!--indegree[neigbhors]) queue.push(neigbhors)
    }
  }
  return ans.length === numCourses ? ans : []
}
