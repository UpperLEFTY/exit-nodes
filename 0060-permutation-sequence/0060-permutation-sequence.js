/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
  let str = ''
  const num = []
  let factorial = 1
  for (let i = 1; i <= n; i++) {
    factorial *= i
    num.push(i)
  }
  for (let i = 0, l = k - 1; i < n; i++) {
    factorial = Math.floor(factorial / (n - i))
    const index = Math.floor(l / factorial)
    str += num.splice(index, 1)[0]
    l -= index * factorial
  }
  return str
};