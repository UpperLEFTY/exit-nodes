/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(head == null) return null
  let len = 1
  let tmp = head
  while(tmp.next) {
    len++
    tmp = tmp.next
  }
  k = k % len
  if(k === 0) return head
  let tail = head
  for(let i = 1; i < len - k; i++) {
    tail = tail.next
  }
  const newHead = tail.next
  tmp.next = head
  tail.next = null
  return newHead
};