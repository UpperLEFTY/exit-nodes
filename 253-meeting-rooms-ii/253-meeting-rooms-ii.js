/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function(intervals) {
     const n = intervals.length
 const start = Array(n), end = Array(n)
 for(let i = 0; i < n; i++) {
   start[i] = intervals[i][0]
   end[i] = intervals[i][1]
 }
 start.sort((a, b) => a - b)
 end.sort((a, b) => a - b)
 let res = 0, endIdx = 0
 for(let i = 0; i < n; i++) {
   if(start[i] < end[endIdx]) res++
   else endIdx++
 }
 return res
};