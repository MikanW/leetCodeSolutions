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
var inorderTraversal = function(root) {
  let ret = [];
  let stack = [];
  let currentNode = root;

  while ( currentNode || stack.length !== 0 ) {
      if ( currentNode ) {
          // 一番左下へ進みながら、すべての左の子をスタックに入れる
          stack.push(currentNode);
          currentNode = currentNode.left;
      }
      else {
          currentNode = stack.pop();
          ret.push(currentNode.val);
          currentNode = currentNode.right;
      }
  }
  return ret;
};