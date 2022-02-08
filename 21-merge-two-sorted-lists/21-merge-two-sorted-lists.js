/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const head = new ListNode(0);
    let now = head;
    let p1 = list1;
    let p2 = list2;
    while (p1 || p2) {
        if (p1 === null || (p2 !== null && p2.val < p1.val)) {
            now.next = p2;
            p2 = p2.next;
        } else {
            now.next = p1;
            p1 = p1.next;
        }
        now = now.next;
    }
    return head.next;
};