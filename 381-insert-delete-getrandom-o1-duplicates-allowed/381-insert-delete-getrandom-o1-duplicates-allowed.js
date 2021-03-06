
var RandomizedCollection = function() {
    this.map = new Map();
    this.list = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
   const index = this.list.length
   const node = { val, index }
   this.list[index] = node
   
    const nodeList = this.map.get(val)
    const isNew = nodeList === undefined || nodeList.length === 0
    if (nodeList === undefined) {
        this.map.set(val, [node])
    } else {
        nodeList.push(node)
    }
     return isNew
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    const nodeList = this.map.get(val) 
    if (!nodeList ||  nodeList.length === 0) return false
    const node = nodeList.pop()
    const replacement = this.list.pop()
    if(replacement.index !== node.index) {
        replacement.index = node.index
        this.list[replacement.index] = replacement
    }
    return true
 }
/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
 const index = Math.floor(Math.random() * this.list.length)
 return this.list[index].val
}

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */