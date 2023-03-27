/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  let result = [];

  const combinationSum3Util = (current, currentIndex, sumTillNow, numsAddedTillNow, k, n) => {
    if (numsAddedTillNow == k && sumTillNow == n) {
      result.push([...current]);
      return;
    }

    if (numsAddedTillNow > k || sumTillNow > n) {
      return;
    }

    for (let i = currentIndex; i <= 9; i++) {
      sumTillNow += i;
      current.push(i);
      numsAddedTillNow++;

      combinationSum3Util(current, i + 1, sumTillNow, numsAddedTillNow, k, n);

      sumTillNow -= i;
      current.pop();
      numsAddedTillNow--;
    }
  }

  combinationSum3Util([], 1, 0, 0, k, n);

  return result;
};