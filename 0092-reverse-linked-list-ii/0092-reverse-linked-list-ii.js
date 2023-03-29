/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function(head, left, right) {
 if(head == null || left === right) return head
 const dummy = new ListNode()
 dummy.next = head
 let tail = null, p = dummy
 for(let i = 1; i < left; i++) {
   p = p.next
 } 
 tail = p.next
 let tmp
 for(let i = 0; i < right - left; i++) {
   tmp = p.next
   p.next = tail.next
   tail.next = tail.next.next
   p.next.next = tmp
 }
 return dummy.next
}