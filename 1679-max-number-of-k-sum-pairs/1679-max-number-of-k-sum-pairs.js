/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function(nums, k) {
    const cnt = new Map();
    let ans = 0;
    for (const x of nums) {
        if (cnt.get(k - x)) {
            cnt.set(k - x, cnt.get(k - x) - 1);
            ++ans;
        } else {
            cnt.set(x, (cnt.get(x) | 0) + 1);
        }
    }
    return ans;
};