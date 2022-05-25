/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
  const stack = []
  for(let e of envelopes) {
    if(stack.length === 0 || e[1] > stack[stack.length - 1][1]) {
      stack.push(e)
      continue
    }
    let l = 0, r = stack.length - 1
    while(l < r) {
      const mid = ~~((l+r)/2)
      if(stack[mid][1] < e[1]) {
        l = mid + 1
      } else r = mid
    }
    stack[l] = e
  }
  return stack.length
};
