/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
 const b = n.toString(2)
 const leadingZeroes = b.padStart(32,'0')
 const rev = leadingZeroes.split('')
 rev.reverse()
 return parseInt(rev.join(''), 2)
};