/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
const f = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) f[i] = f[i >> 1] + (i & 1)
  return f
}
