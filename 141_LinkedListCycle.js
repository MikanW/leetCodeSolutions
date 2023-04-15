/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }

  currentNode = head;
  head.val = 0;

  while (currentNode.next) {
    if (currentNode.next.val === true) {
      return true;
    }

    currentNode.val = true;
    currentNode = currentNode.next;
  }
  return false;
};
