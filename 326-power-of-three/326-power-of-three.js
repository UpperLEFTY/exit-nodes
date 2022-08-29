/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
//     const maxInt = Math.pow(3,30)
//     if(n < 0) {
//         return false
//     }
//     return maxInt % n === 0
// };
    
    // another 
    
    if(n === null || n === 0) return false
        let num = 1
        while(num < n) {
            num*= 3
        }
          return num > n ? false : true
    }