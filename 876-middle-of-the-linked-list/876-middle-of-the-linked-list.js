/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
   if (head == null) return null
  let count = 1
  let iter = head
  while (iter.next) {
    iter = iter.next
    count++
  }
  count = (count / 2) >> 0
  while (count) {
    head = head.next
    count--
  }
  return head
}