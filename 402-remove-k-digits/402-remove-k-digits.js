/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
 const n = num.length, stack = []
  for(let i = 0; i < n; i++) {
    const ch = num[i]
    while(stack.length && k > 0 && ch < stack[stack.length - 1]) {
      stack.pop()
      k--
    }
    stack.push(ch)
  }
  while(k > 0) {
    stack.pop()
    k--
  }
  while(stack[0] === '0') stack.shift()
  return stack.length ? stack.join('') : '0'
};