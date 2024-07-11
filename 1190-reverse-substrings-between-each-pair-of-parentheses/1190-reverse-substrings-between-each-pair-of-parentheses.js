/**
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = function(s) {
  const n = s.length
  const stack = []
  const pair = []
  for(let i = 0; i < n; i++) {
    if(s[i] === '(') stack.push(i)
    else if(s[i] === ')') {
      const tmp = stack.pop()
      pair[i] = tmp
      pair[tmp] = i
    }
  }
  let res = ''
  for(let i = 0, d = 1; i < n; i += d) {
    if(s[i] === '(' || s[i] ===')') {
      i = pair[i]
      d = -d
    } else {
      res += s[i]
    }
  }
  return res
}
