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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  var ret = true;

  let isMirror = function (left, right) {
    if (!left && !right) {
      return;
    }

    if ((!left && right) || (left && !right)) {
      ret = false;
      return;
    }

    if (left?.val === right?.val) {
      isMirror(left.left, right.right);
      isMirror(left.right, right.left);
    } else {
      ret = false;
      return;
    }
  };

  isMirror(root.left, root.right);
  return ret;
};
