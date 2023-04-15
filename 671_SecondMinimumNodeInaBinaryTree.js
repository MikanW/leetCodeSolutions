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
var findSecondMinimumValue = function(root) {
  var min = Number.MAX_SAFE_INTEGER;
  var secondMin = Number.MAX_SAFE_INTEGER;

  var findSecondMin = function( currentNode ) {
      if ( !currentNode ) {
          return -1;
      }

      if ( currentNode.val > min && currentNode.val < secondMin) {
          secondMin = currentNode.val;
      }

      min = Math.min(min, currentNode.val);
      
      findSecondMin(currentNode.left);
      findSecondMin(currentNode.right);
  }

  findSecondMin(root);
  return (secondMin == Number.MAX_SAFE_INTEGER) ? -1 : secondMin;

};