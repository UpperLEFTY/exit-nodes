/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
 let longest = 0
 let stack = [-1]
 for (let i = 0; i < s.length; i++) {
   if (s[i] === "(") {
     stack.push(i)
   } else {
     stack.pop()
     if (!stack.length) stack.push(i)
     else longest = Math.max(longest, i - stack[stack.length - 1])
   }
 }
 return longest
}