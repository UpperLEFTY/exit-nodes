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
var deleteDuplicates = function(head) {
  let dummy = new ListNode(undefined);
    dummy.next = head;
    let prev = dummy;
    let curr = head;
    
    while(curr) {
      while(curr.next && curr.next.val === curr.val) {
        curr = curr.next;
      }
      if(prev.next === curr) { // detect if it has deleted some elements
        prev = prev.next;
        curr = curr.next;
      } else {
        prev.next = curr.next;
        curr = curr.next;
      }
    }
    
    return dummy.next;
  };
