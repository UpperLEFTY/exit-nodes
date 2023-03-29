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
  vector<vector<int>> pathSum(TreeNode* root, int sum) {
    vector<vector<int>> ans;
    dfs(root, sum, {}, ans);
    return ans;
  }

 private:
  void dfs(TreeNode* root, int sum, vector<int>&& path,
           vector<vector<int>>& ans) {
    if (root == nullptr)
      return;
    if (root->val == sum && root->left == nullptr && root->right == nullptr) {
      path.push_back(root->val);
      ans.push_back(path);
      path.pop_back();
      return;
    }

    path.push_back(root->val);
    dfs(root->left, sum - root->val, move(path), ans);
    dfs(root->right, sum - root->val, move(path), ans);
    path.pop_back();
  }
};
