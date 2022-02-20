/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function(n, blacklist) {
 this.map = new Map()
  for (let b of blacklist) this.map.set(b, -1)
  this.M = n - this.map.size
  for (let b of blacklist) {
    if (b < this.M) {
      while (this.map.has(n - 1)) n--
      this.map.set(b, n - 1)
      n--
    }
  }
};


/**
 * @return {number}
 */
Solution.prototype.pick = function() {
 const p = Math.floor(Math.random() * this.M)
  if (this.map.has(p)) return this.map.get(p)
  return p
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */