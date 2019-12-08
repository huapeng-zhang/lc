/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    head = {next: head};
    let preStart = head;
    let pre = head;
    let node = head.next;
    for (let i = 1; i <= n; i++) {
        if (i === m-1) {
            preStart = node;

            pre = node;
            node = node.next;
        } else if (i > m) {
            pre.next = node.next;
            node.next = preStart.next;
            preStart.next = node;

            node = pre.next;
        } else {
            pre = node;
            node = node.next;
        }
    }

    return head.next;
};

module.exports = reverseBetween;
