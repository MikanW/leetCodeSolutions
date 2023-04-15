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
var isSameTree = function(p, q) {
  var ret = true;
  
  var compareNode = function (p, q) {

      if ( p?.val !== q?.val ) {
          return ret = false;
      }

      if ( p?.left && q?.left ) {
          compareNode(p.left, q.left);
      }
      else if(!p?.left && q?.left) {
          return ret = false;
      }
      else if(p?.left && !q?.left) {
          return ret = false;
      }

      if ( p?.right && q?.right ) {
          compareNode(p.right, q.right);
      }
      else if(!p?.right && q?.right) {
          return ret = false;
      }
      else if(p?.right && !q?.right) {
          return ret = false;
      }
  }

  compareNode(p, q);
  return ret;
};