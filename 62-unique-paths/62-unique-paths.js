/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
const dp = Array(m).fill(0)
  for(let i = 0; i < n; i++) {
    dp[0] = 1
    for(let j = 1; j < m; j++) {
      dp[j] += dp[j - 1]
    }
  }
  return dp[m - 1]
};