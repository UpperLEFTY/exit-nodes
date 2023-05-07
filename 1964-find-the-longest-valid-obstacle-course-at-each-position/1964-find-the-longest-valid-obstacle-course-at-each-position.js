/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
const longestObstacleCourseAtEachPosition = function(obstacles) {
  const n = obstacles.length
  const stack = [], res = []
  let len = 0
  
  for(let i = 0; i < n; i++) {
    const cur = obstacles[i]
    const idx = chk(cur)
    if(idx === len) {
      stack.push(cur)
      len++
      res.push(len)
    }else {
      stack[idx] = cur
      res.push(idx + 1)
    }
  }

  return res
  
  function chk(x) {
    if(len && stack[len - 1] <= x) return len
    let l = 0, r = len - 1
    while(l < r) {
      const mid = ~~((l + r) / 2)
      if(stack[mid] <= x) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    return l
  }
};
