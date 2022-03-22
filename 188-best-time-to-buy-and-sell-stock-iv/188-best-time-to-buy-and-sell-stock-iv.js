/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if(prices.length === 0) return 0
 
 if(k > (prices.length/2)) {
     let profit = 0
     for(let i = 1; i < prices.length; i++) {
         if(prices[i] > prices[i-1]) profit += prices[i] - prices[i-1]
     }
     return profit
 } else {
     let dp = new Array(prices.length).fill(0)
     let length = prices.length
     for(let j = 0; j < k; j++) {
         let min = prices[0], max = 0
         for(let i = 0; i < length; i++) {
             min = Math.min(min, prices[i] - dp[i])
             max = Math.max(max, prices[i] - min)
             dp[i] = max
         }
     }
     return dp.pop()
  }
};