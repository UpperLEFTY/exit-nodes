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
const swapPairs = function(node) {
  head = new ListNode(-1);
  let Ln = head;

  while (node !== null) {
    if (node.next !== null) {
      let one = node;
      let two = node.next;
      let three = node.next.next;
      Ln.next = two;
      two.next = one;
      one.next = three;
      Ln = Ln.next.next;
      node = three;
    } else {
      Ln.next = node;
      break;
    }
  }

  return head.next;
};
