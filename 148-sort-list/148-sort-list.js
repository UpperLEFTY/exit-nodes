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
var sortList = function(head) {
  if(head == null || head.next == null) return head
  let slow = head, fast = head, pre = null
  while(fast && fast.next) {
    pre = slow
    slow = slow.next
    fast = fast.next.next
  }
  pre.next = null
  const left = sortList(head)
  const right = sortList(slow)
  return merge(left, right)
}

function merge(left, right) {
  const ln1 = new ListNode()
  let ln2 = ln1
  while(left && right) {
    if (left.val <= right.val) {
      ln2.next = left
      left = left.next
    } else {
      ln2.next = right
      right = right.next
    }
    ln2 = ln2.next
  }
  if(left) {
    ln2.next = left
  }

  if(right) {
    ln2.next = right
  }

  return ln1.next
}
