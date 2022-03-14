/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const subs = [[]]
    for (let num of nums) {
        const n = subs.length
      for (let i = 0; i < n; i++) {
          subs.push(subs[i].slice(0))
          subs[subs.length -1].push(num)
      }
    }
    return subs
}; 