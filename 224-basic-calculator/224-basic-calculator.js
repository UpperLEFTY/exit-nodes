/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
 s = s.split(' ').join('')
  const n = s.length, stack = []
  const isNum = ch => ch >= '0' && ch <= '9'
  let num = 0, op = 1, res = 0
  for(let i = 0; i < n; i++) {
    const ch = s[i]
    if(isNum(ch)) {
      num = num * 10 + (+ch)
    } else {
      if(ch === '(') {
        stack.push(res)
        stack.push(op)
        num = 0
        op = 1
        res = 0
      } else if(ch === ')') {
        res += num * op
        res *= stack.pop()
        res += stack.pop()
        num = 0
        op = 1
      } else if(ch === '+') {
        res += op * num
        op = 1
        num = 0
      } else if(ch === '-') {
        res += op * num
        op = -1
        num = 0
      }
    }
  }
  
  return res + op * num
};
