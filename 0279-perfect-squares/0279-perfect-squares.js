/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function(n) {
    if(n <= 0) return 0
    const cntPerfectSquares = [0]
    while (cntPerfectSquares.length <= n) {
  const m = cntPerfectSquares.length
  let cntSquares = Number.MAX_VALUE
  for (let i = 1; i * i <= m; i++) {
    cntSquares = Math.min(cntSquares, cntPerfectSquares[m - i * i] + 1)
  }
  cntPerfectSquares.push(cntSquares)
}
return cntPerfectSquares[n]
};