/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
 if(intervals == null || intervals.length === 0) return []
  intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  const res = [intervals[0]]
  for(let i = 1, n = intervals.length; i < n; i++) {
    const last = res[res.length - 1]
    const lastEnd = last[1]
    const [s, e] = intervals[i]
    if(s > lastEnd) {
      res.push(intervals[i])
    } else {
      last[1] = Math.max(last[1], e)
    }
  }
  return res
};