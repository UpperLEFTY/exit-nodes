/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
     let len = s.length, count = 1 << k,
        seen = new Uint8Array(count),
        num = parseInt(s.slice(len - k + 1), 2) << 1
    for (let i = len - k; ~i; i--) {
        num = ((s.charAt(i) << k) + num) >> 1
        if (!seen[num]) seen[num] = 1, count--
        if (!count) return true
        if (i < count) return false
    }
};
