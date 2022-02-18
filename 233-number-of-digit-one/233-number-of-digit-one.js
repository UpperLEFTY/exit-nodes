/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
 let res = 0, factor = 1, lower = 0, cur = 0, higher = 0
  while(~~(n / factor) !== 0) {
    lower = n - (~~(n / factor)) * factor
    cur = (~~(n / factor)) % 10
    higher = ~~(n / (factor * 10))
    switch(cur) {
      case 0:
        res += higher * factor
        break
      case 1:
        res += higher * factor + lower + 1
        break
      default:
        res += (higher + 1) * factor
        break
    }
    factor *= 10
  }
  
  return res
};
