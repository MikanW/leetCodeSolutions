/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head === null) {
    return null;
  }
  let values = [];
  let currentNode = head;

  while (currentNode) {
    values.push(currentNode.val);
    currentNode = currentNode.next;
  }
  let ret = new ListNode();
  let retCurrNode = ret;

  for (let i = 0; i < values.length - n - 1; i++) {
    retCurrNode.val = values[i];
    retCurrNode.next = new ListNode(values[i + 1]);
  }
};
