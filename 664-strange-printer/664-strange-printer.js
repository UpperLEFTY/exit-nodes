/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
  const n = s.length
 const dp = Array.from({ length: n }, () => Array(n).fill(n))
 for(let i = 0; i < n; i++) dp[i][i] = 1
 for(let len = 2; len <= n; len++) {
   for(let i = 0; i < n - len + 1; i++) {
     let j = i + len - 1
     dp[i][j] = 1 + dp[i + 1][j]
     for(let k = i + 1; k < j; k++) {
       if(s[i] === s[k]) dp[i][j] = Math.min(dp[i][j], dp[i][k - 1] + dp[k + 1][j])
     }
     if(s[i] === s[j]) dp[i][j] = Math.min(dp[i][j - 1], dp[i][j])
   }
 }
 return dp[0][n - 1]
};