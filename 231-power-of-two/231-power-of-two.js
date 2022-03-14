/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function(n) {
//     return Math.log2(n)%1 === 0
// };

// const isPowerOfTwo = n => n < 1 ? false : Number.MAX_VALUE % n === 0

const isPowerOfTwo = x => x > 0 ? !(x & (x - 1)) : false;

