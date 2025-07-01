/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const dfs = (root1, root2) => {
  if (!root1 && !root2) return true;
  else if (!root1 || !root2 || root1.val != root2.val) return false;

  if (!dfs(root1.left, root2.left)) return false;
  if (!dfs(root1.right, root2.right)) return false;

  return true;
};

const isSameTree = (p, q) => {
  return dfs(p, q);
};
