/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
   let max = -Infinity, sum = 0
 for(let num of nums) {
   sum += num
   max = Math.max(max, num)
 }
 if (m === 1) return sum
 let l = max, r = sum
 while(l < r) {
   let mid = l + ((r - l) >> 1)
   if(valid(mid, nums, m)) {
     r = mid
   } else {
     l = mid + 1
   }
 }
 return l
}
function valid(target, nums, m) {
 let cnt = 1, sum = 0
 for(let num of nums) {
   sum += num
   if(sum > target) {
     cnt++
     sum = num
     if(cnt > m) return false
   }
 }
 return true
};