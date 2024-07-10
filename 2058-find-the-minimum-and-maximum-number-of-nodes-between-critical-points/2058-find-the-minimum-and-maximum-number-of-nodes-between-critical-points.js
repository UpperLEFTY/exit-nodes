/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
function nodesBetweenCriticalPoints(head) {
  let minDistance = Infinity;
  let firstCriticalPos = null;
  let prevCriticalPos = null;
  let maxDistance = -1;
  let position = 0;
  let currentNode = head.next;
  let prevNode = head;

  while (currentNode && currentNode.next) {
    if ((currentNode.val > prevNode.val && currentNode.val > currentNode.next.val) || 
        (currentNode.val < prevNode.val && currentNode.val < currentNode.next.val)) {
      if (firstCriticalPos === null) {
        firstCriticalPos = position;
      } else {
        minDistance = Math.min(minDistance, position - prevCriticalPos);
        maxDistance = position - firstCriticalPos;
      }
      prevCriticalPos = position;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
    position++;
  }

  if (minDistance === Infinity) {
    minDistance = -1;
  }

  return [minDistance, maxDistance];
}