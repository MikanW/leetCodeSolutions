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
 * @return {number}
 */
var maxDepth = function (root) {
  var maxDeep = 0;

  var countDepth = function (currentNode, currentDepth) {
    if (!currentDepth) {
      return;
    }
    if (currentDepth > maxDeep) {
      maxDeep = currentDepth;
    }
    countDepth(currentNode.left, currentDepth + 1);
    countDepth(currentNode.right, currentDepth + 1);
  };

  countDepth(root, 1);
  return maxDeep;
};
