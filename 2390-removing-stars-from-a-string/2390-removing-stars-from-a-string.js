/**
 * @param {string} s
 * @return {string}
 */
const removeStars = function(s) {
    let stack = []
   if (s.length === 0) return ''
    for (let i = 0; i < s.length; i++) {
      if (s[i] == '*')  stack.pop()
        else stack.push(s[i])
    }
    return stack.join('')
};