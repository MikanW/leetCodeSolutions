/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function(l1, l2) {
    
  const createNextNode = (node1, node2, rest=0) => {
      if ( !node1 && !node2 && !rest ) {
          return null;
      }
      const val = (node1?.val || 0) + (node2?.val || 0 ) + rest;
      const nextNode = createNextNode(node1?.next, node2?.next, Math.floor(val/10) );
      
      return new ListNode(val%10, nextNode);
  }
  
  return createNextNode(l1, l2);
};