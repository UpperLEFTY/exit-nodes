/**
 * @param {number} n
 * @return {number}
 */
const maxA = function(N) {
   const dp = [0, 1, 2, 3, 4, 5, 6] 
   const recursive = function (n) {
       if(dp[n]) return dp[n]
        const max = Math.max(
        recursive(n - 3) * 2,
        recursive(n - 4) * 3,
        recursive(n - 5) * 4
        )
        return (dp[n] = max)
   }
   return recursive(N)
};