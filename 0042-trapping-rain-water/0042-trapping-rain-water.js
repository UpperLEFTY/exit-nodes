/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  const len = height.length
  if (len === 0) return 0
  const leftMax = [height[0]]
  const rightMax = []
  rightMax[len - 1] = height[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1])
  }
  let res = 0
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1])
    res += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return res
}