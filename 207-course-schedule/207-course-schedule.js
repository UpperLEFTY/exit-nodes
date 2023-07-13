/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(numCourses, prerequisites) {
  const set = new Set(), hash = {}
  for(let i = 0; i < prerequisites.length; i++) {
    const [cur, pre] = prerequisites[i]
    if(hash[cur] == null) hash[cur] = new Set()
    hash[cur].add(pre)
  }
  const q = []

  for(let i = 0; i < numCourses; i++) {
    if(hash[i] == null) q.push(i)
  }
  let visited = 0

  while(q.length) {
    const cur = q.shift()
    visited++
    Object.keys(hash).forEach(k => {
      if(hash[k].has(cur)) {
        hash[k].delete(cur)
      }
      if(hash[k].size === 0) {
        delete hash[k]
        q.push(+k)
      }
    })
  }
  return visited === numCourses
};
