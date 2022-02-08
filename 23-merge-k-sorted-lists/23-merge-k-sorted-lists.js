/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let res = [];
  let tmp = null;
  for (let i = 0; i < lists.length; i++) {
    tmp = lists[i];
    while (tmp !== null) {
      res.push(tmp);
      tmp = tmp.next;
    }
  }
  res.sort((a, b) => (a.val - b.val));
  for (let j = 0; j < res.length; j++) {
    res[j].next = res[j + 1] || null;
  }
  return res[0] || null;
};