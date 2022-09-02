/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function(root) {
    const res = []
    layer(res, [root]);
    return res.map(el => el.val / el.num);
};
   
function layer(arr, args) {
 const item = {
   val: args.reduce((ac, el) => ac + el.val, 0),
   num: args.length
 };
 arr.push(item);
 const children = [];
 args.forEach(el => {
   el.left === null ? null : children.push(el.left);
   el.right === null ? null : children.push(el.right);
 });
 if (children.length) {
   layer(arr, children);
 }
}