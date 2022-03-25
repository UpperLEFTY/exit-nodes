/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
 const n = costs.length
 let res = 0
 const refund = []
 for(let i = 0; i < n; i++) {
   refund[i] = costs[i][1] - costs[i][0]
   res += costs[i][0]
 }
 refund.sort((a, b) => a - b)
 for(let i = 0; i < n/ 2; i++) {
   res += refund[i]
 }
 return res
};