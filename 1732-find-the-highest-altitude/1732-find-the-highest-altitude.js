/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function(gain) {
    let ans = 0;
    let h = 0;
    for (const v of gain) {
        h += v;
        ans = Math.max(ans, h);
    }
    return ans;
};