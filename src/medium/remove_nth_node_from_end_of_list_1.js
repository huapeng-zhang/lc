/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let preNode = null;
    let node = head;
    let count = 0;

    while(node) {
        if (count === n) {
            preNode = head;
        } else if (count > n) {
            preNode = preNode.next;
        }

        node = node.next;
        count++;
    }

    if (preNode === null) {
        return head.next;
    } else {
        preNode.next = preNode.next.next;
        return head;
    }
};

module.exports = removeNthFromEnd;
