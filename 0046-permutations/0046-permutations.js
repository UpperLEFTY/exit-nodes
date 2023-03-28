/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const res = []
  bt(nums, 0, [], res)
  return res
};

function bt(nums, idx, cur, res) {
  if(idx === nums.length) {
    res.push(cur.slice())
    return
  }
  for(let i = 0; i < nums.length; i++) {
    if(cur.indexOf(nums[i]) !== -1) continue
    cur.push(nums[i])
    bt(nums, idx + 1, cur, res)
    cur.pop()
  }
}
