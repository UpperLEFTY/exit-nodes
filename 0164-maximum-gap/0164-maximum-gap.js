/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumGap = function (nums) {
    let len = nums.length;
    if (len < 2) return 0;

    let max = Math.max(...nums);
    let min = Math.min(...nums);
    if (max === min) return 0;

    let minBuckets = Array(len - 1).fill(Number.MAX_SAFE_INTEGER);
    let maxBuckets = Array(len - 1).fill(Number.MIN_SAFE_INTEGER);
    let gap = Math.ceil((max - min) / (len - 1));
    let index = 0;
    for (let i = 0; i < len; i++) {
      if (nums[i] === min || nums[i] === max) continue;
      index = Math.floor((nums[i] - min) / gap);
      minBuckets[index] = Math.min(minBuckets[index], nums[i]);
      maxBuckets[index] = Math.max(maxBuckets[index], nums[i]);
    }

    let maxGap = Number.MIN_SAFE_INTEGER;
    let preVal = min;
    for (let j = 0; j < len - 1; j++) {
      if (minBuckets[j] === Number.MAX_SAFE_INTEGER && maxBuckets[j] === Number.MIN_SAFE_INTEGER) continue;
      maxGap = Math.max(maxGap, minBuckets[j] - preVal);
      preVal = maxBuckets[j];
    }
    maxGap = Math.max(maxGap, max - preVal);

    return maxGap;
  };

