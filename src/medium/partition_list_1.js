/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const headS = {};
    const headB = {};
    let lastS = headS;
    let lastB = headB;

    while (head) {
        if (head.val < x) {
            lastS.next = head;
            lastS = head;
        } else {
            lastB.next = head;
            lastB = head;
        }
        head = head.next;
    }
    lastB.next = null;
    lastS.next = headB.next;
    return headS.next;
};

module.exports = partition;
