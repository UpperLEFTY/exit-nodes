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
const connect = function (root) {
  const stack = [];
  let tmp = null;
  let node = null;
  let next = null;
  let level = 0;
if (root) stack.push([root, 0]);

  while (stack.length) {
   tmp = stack.shift();
    node = tmp[0];
    level = tmp[1];

    next = stack[0] && stack[0][1] === level ? stack[0][0] : null;

    node.next = next;

    if (node.left) stack.push([node.left, level + 1]);
    if (node.right) stack.push([node.right, level + 1]);
  }
     return root
};