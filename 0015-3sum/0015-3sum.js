/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// const threeSum = function(nums) {
//   let len = nums.length;
//   let res = [];
//   let l = 0;
//   let r = 0;
//   nums.sort((a, b) => (a - b));
//   for (let i = 0; i < len; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     l = i + 1;
//     r = len - 1;
//     while (l < r) {
//       if (nums[i] + nums[l] + nums[r] < 0) {
//         l++;
//       } else if (nums[i] + nums[l] + nums[r] > 0) {
//         r--;
//       } else {
//         res.push([nums[i], nums[l], nums[r]]);
//         while (l < r && nums[l] === nums[l + 1]) l++;
//         while (l < r && nums[r] === nums[r - 1]) r--;
//         l++;
//         r--;
//       }
//     }
//   }
//   return res;
// };

// Another 

const threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      if (left > i + 1 && nums[left] === nums[left - 1]) {
        left += 1
        continue
      }
      const sum = nums[left] + nums[right] + nums[i]
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        left += 1
        right -= 1
      } else if (sum > 0) {
        right -= 1
      } else {
        left += 1
      }
    }
  }
  return result
}