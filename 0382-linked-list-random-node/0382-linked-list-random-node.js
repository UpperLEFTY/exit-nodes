/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
const Solution = function(head) {
  this.list = head;
  this.arr = [];
  loop(head, this.arr);
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  const len = this.arr.length;
  return this.arr[Math.floor(Math.random() * len)].val;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
function loop(node, arr) {
  if (node == null) return;
  arr.push(node);
  loop(node.next, arr);
}
