/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
const longestSubsequence = function(arr, difference) {
    let ans = 1;
    const dp = new Map();
    for (const t of arr) {
        dp.set(t, (dp.get(t - difference) || 0) + 1);
        ans = Math.max(ans, dp.get(t));
    }
    return ans;
};