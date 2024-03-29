/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
 public:
  int longestUnivaluePath(TreeNode* root) {
    int ans = 0;
    longestUnivaluePathDownFrom(root, ans);
    return ans;
  }

 private:
  int longestUnivaluePathDownFrom(TreeNode* root, int& ans) {
    if (root == nullptr)
      return 0;

    const int l = longestUnivaluePathDownFrom(root->left, ans);
    const int r = longestUnivaluePathDownFrom(root->right, ans);
    const int arrowLeft =
        root->left && root->left->val == root->val ? l + 1 : 0;
    const int arrowRight =
        root->right && root->right->val == root->val ? r + 1 : 0;
    ans = max(ans, arrowLeft + arrowRight);
    return max(arrowLeft, arrowRight);
  }
};
