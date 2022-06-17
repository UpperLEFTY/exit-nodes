/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function(head) {
  let lmap = new Map(), dummy = {},
        curr = head, copy = dummy
    while (curr) {
        let newNode = new Node(curr.val, null, null)
        lmap.set(curr, newNode)
        copy.next = newNode, copy = newNode, curr = curr.next
    }
    curr = head, copy = dummy.next
    while (curr) {
        copy.random = lmap.get(curr.random)
        curr = curr.next, copy = copy.next
    }
    return dummy.next
};
