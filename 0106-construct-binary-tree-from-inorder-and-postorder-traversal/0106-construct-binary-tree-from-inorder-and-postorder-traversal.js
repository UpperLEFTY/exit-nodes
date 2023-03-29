/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function(inorder, postorder) {
const hashmap = {};
const posts = postorder;
for (let i = 0; i < inorder.length; i++) {
  hashmap[inorder[i]] = i;
}
return helper(postorder.length - 1, 0, inorder.length - 1);
function helper(postEnd, inStart, inEnd) {
  if (postEnd < 0 || inEnd < inStart) return null;
  const val = posts[postEnd];
  const idx = hashmap["" + val];
  const root = new TreeNode(val);
  root.left = helper(postEnd - (inEnd - idx) - 1, inStart, idx - 1);
  root.right = helper(postEnd - 1, idx + 1, inEnd);
  return root;
  }
};