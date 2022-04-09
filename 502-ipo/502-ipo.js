/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
  const idxArr = profits.map((_, i) => i).sort((ia, ib) => profits[ib] - profits[ia]);
 while (k) {
   const choose = idxArr.findIndex(i => capital[i] <= w);
   if (choose == -1) return w;
   w += profits[idxArr[choose]];
   idxArr.splice(choose, 1);
   k--;
 }
 return w;
};