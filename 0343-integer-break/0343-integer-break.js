/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function(n) {
 if(n === 2) return 1
 if(n === 3) return 2
 let num = ~~(n / 3)
 let rem = n % 3
 if(rem === 1) {
   rem += 3
   num--
 }
 return rem === 0 ? Math.pow(3, num) : Math.pow(3, num) * rem
};