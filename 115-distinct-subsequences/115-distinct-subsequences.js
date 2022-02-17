/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let dp = Array(s.length).fill(0).map(_ => Array(t.length));
  return helper(s, t, 0, 0, dp);
};

let helper = function (s, t, sIndex, tIndex, dp) {
  if (tIndex === t.length) return 1;
  if (sIndex === s.length) return 0;
  if (dp[sIndex][tIndex] === undefined) {
    if (s[sIndex] === t[tIndex]) {
      dp[sIndex][tIndex] = helper(s, t, sIndex + 1, tIndex + 1, dp) + helper(s, t, sIndex + 1, tIndex, dp);
    } else {
      dp[sIndex][tIndex] = helper(s, t, sIndex + 1, tIndex, dp);
    }
  }
  return dp[sIndex][tIndex];
};