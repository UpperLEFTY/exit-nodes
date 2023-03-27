/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
 const containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  if (indexDiff < 1 || valueDiff < 0) {
    return false
  }
  const array = new Map()
  const num = 10 ** 10
  for (let i = 0, iL = nums.length; i < iL; ++i) {
    const noNegative = nums[i] + num
    const factor = Math.floor(noNegative / (valueDiff + 1))
    if (
      array.has(factor) ||
      (array.has(factor - 1) && noNegative - array.get(factor - 1) <= valueDiff) ||
      (array.has(factor + 1) && array.get(factor + 1) - noNegative <= valueDiff)
    ) {
      return true
    }
    if (array.size >= indexDiff) {
      array.delete(Math.floor((nums[i - indexDiff] + num) / (valueDiff + 1)))
    }
    array.set(factor, noNegative)
  }
  return false
}
