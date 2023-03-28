/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
  this.original = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.original;  
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const res = [];
    const len = this.original.length;
    let idx = 0;
    let i = 0;
   while (idx <= len - 1) {
   i = Math.floor(Math.random() * len);
   if (res[i] == null) {
     res[i] = this.original[idx];
     idx += 1;
   }
 }
 return res;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */