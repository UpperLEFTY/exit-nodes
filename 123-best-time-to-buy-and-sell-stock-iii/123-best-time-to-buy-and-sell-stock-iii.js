/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy1 = Number.MIN_SAFE_INTEGER;
  let sell1 = 0;
  let buy2 = Number.MIN_SAFE_INTEGER;
  let sell2 = 0;
  let len = prices.length;
  for (let i = 0; i < len; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
};
