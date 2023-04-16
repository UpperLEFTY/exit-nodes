/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  const sumA = nums.reduce((acc, curr) => acc + curr, 0)
  if (sumA % 2) return false
  let row = 1n << BigInt(sumA / 2)
  for (const weight of nums) row = row | (row >> BigInt(weight))
  return row & 1n
}