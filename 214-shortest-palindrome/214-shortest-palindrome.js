/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
 const tmp = s + '#' + s.split('').reverse().join('')
  const fail = getFail(tmp)
  return (
    s
      .split('')
      .slice(fail[fail.length - 1])
      .reverse()
      .join('') + s
  )
}

function getFail(s) {
  const n = s.length
  const table = new Array(n).fill(0)
  let index = 0
  for (let i = 1; i < n; ) {
    if (s.charAt(index) === s.charAt(i)) {
      table[i] = ++index
      i++
    } else {
      if (index > 0) {
        index = table[index - 1]
      } else {
        index = 0
        i++
      }
    }
  }
  return table
}
