/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 const sortedListToBST = function(head, tail = null) {
    if (head === tail) {
        return null;
    } else if (head.next === tail) {
        return new TreeNode(head.val);
    } else {
        let slow = head; 
        let fast = head;
        while (fast !== tail && fast.next !== tail) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let node = new TreeNode(slow.val);
        node.left = sortedListToBST(head, slow);
        node.right = sortedListToBST(slow.next, tail);
        return node;
    }
};
