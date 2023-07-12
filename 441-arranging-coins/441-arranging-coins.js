/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function(n) {
  return (-1 + Math.sqrt(1+4*2*n)) >> 1
};
