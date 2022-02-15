/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = [];
  let len = candidates.length;
  candidates.sort((a, b) => (a - b));
  dfs(res, [], 0, len, candidates, target);
  return res;
};

const dfs = function (res, stack, index, len, candidates, target) {
  let tmp = null;
  if (target < 0) return;
  if (target === 0) return res.push(stack);
  for (let i = index; i < len; i++) {
    if (candidates[i] > target) break;
    tmp = Array.from(stack);
    tmp.push(candidates[i]);
    dfs(res, tmp, i, len, candidates, target - candidates[i]);
  }
};