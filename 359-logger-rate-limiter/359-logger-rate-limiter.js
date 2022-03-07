
var Logger = function() {
  this.m = new Map()  
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
     if(!this.m.has(message)) {
    this.m.set(message, timestamp)
    return true
  }
  const p = this.m.get(message)
  const res = timestamp - p >= 10 ? true : false
  if(res) {
    this.m.set(message, timestamp)
    return true
  }
  return false
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */