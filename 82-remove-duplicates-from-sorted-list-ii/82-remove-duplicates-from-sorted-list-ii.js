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
// const deleteDuplicates = function(head) {
//     let dummy = new ListNode(undefined);
//     dummy.next = head;
//     let prev = dummy;
//     let curr = head; 
    
//      while(curr) {
//    while(curr.next && curr.next.val === curr.val) {
//      curr = curr.next;
//    }
//    if(prev.next === curr) { // if it has deleted some elements
//      prev = prev.next;
//      curr = curr.next;
//    } else {
//      prev.next = curr.next;
//      curr = curr.next;
//    }
//  }
 
//  return dummy.next;
// };

// another 


const deleteDuplicates = function (head) {
  const temp = {
    next: head,
  }
  let prev = temp
  let current = head
  while (current) {
    let isDuplicate = false
    while (current.next && current.val === current.next.val) {
      isDuplicate = true
      current.next = current.next.next
    }
    current = current.next
    if (isDuplicate) {
      prev.next = current
      isDuplicate = false
    } else {
      prev = prev.next
    }
  }
  return temp.next
}
