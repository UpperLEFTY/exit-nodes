function longestSubsequence(arr: number[], difference: number): number {
    let ans = 1;
    const dp = new Map();
    for (const t of arr) {
        dp.set(t, (dp.get(t - difference) || 0) + 1);
        ans = Math.max(ans, dp.get(t));
    }
    return ans;
};