/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  let m = dungeon.length;
  let n = dungeon[0].length;
  let dp = Array(m + 1).fill(0).map(_ => Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
  let tmp = 0;

  dp[m][ n - 1] = 1;
  dp[m - 1][n] = 1;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      tmp = Math.min(dp[i][j + 1], dp[i + 1][j]) - dungeon[i][j];
      dp[i][j] = tmp <= 0 ? 1 : tmp;
    }
  }

  return dp[0][0];
};
