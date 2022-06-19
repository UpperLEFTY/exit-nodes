/**
 * @param {string} s
 * @return {number}
 */
const maxUniqueSplit = function(s) {
 const N = s.length
 let ans = -1
 let curr = new Set()
 const backtrack = (pos) => {
   if (pos === N) {
     ans = Math.max(ans, curr.size)
     return
   }
   if (curr.size + (N - pos) <= ans) return
   for (let i = pos + 1; i <= N; i++) {
     const a = s.slice(pos, i)
     if (curr.has(a)) continue
     curr.add(a)
     backtrack(i)
     curr.delete(a)
   }
 }
 backtrack(0)
 return ans
};