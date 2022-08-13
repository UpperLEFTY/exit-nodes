
const RandomizedSet = function() {
    this.arr = []
    this.map = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const {arr, map} = this 
    if(map.has(val)) return false
    const size = arr.length
    arr.push(val)
    map.set(val, size)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const {arr, map} = this
    if(!map.has(val)) return false
    const index = map.get(val), last = arr[arr.length - 1]
    arr[index] = last
    map.set(last, index)
    arr.pop()
    map.delete(val)
    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[~~(this.arr.length * Math.random())]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */