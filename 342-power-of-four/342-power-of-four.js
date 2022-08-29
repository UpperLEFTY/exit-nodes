/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function(n) {
    if (n === 1) { return true; }
    let f = 4;
    while (f <= n) {
        if (f === n) {
            return true;
        }
        f*= 4;
    }
    return false;
};