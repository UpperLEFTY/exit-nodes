/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function(root) {
//   if (root == null) return null
//  const cur = [root]
//  while (cur.length) {
//    let len = cur.length
//    for (let i = 0; i < len; i++) {
//      let el = cur.shift()
//      if (i === len - 1) el.next = null
//      else el.next = cur[0]
//      if (el.left) cur.push(el.left)
//      if (el.right) cur.push(el.right)
//    }
//  }
//  return root
   
// };
    
    // Another 
    
 if (!root) return null
 if (root.left && root.right) {
   root.left.next = root.right
   root.right.next = root.next ? root.next.left : null
 }
 connect(root.left)
 connect(root.right)
 return root
}