/**
 * @param {number} k
 */
const MyCircularQueue = function(k) {
 this.a = new Array(k).fill(0)
this.front = 0
this.rear = -1
this.len = 0  
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
   if (!this.isFull()) {
  this.rear = (this.rear + 1) % this.a.length
  this.a[this.rear] = value
  this.len++
  return true
  } else return false 
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
      if (!this.isEmpty()) {
    this.front = (this.front + 1) % this.a.length
    this.len--
    return true
  } else return false
}


/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.a[this.front]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty() ? -1 : this.a[this.rear]  
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
     return this.len === 0 
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.len == this.a.length
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */