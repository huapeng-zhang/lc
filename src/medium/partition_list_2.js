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
    const head1 = {next: head};
    const head2 = {};

    let pre1 = head1;
    let pre2 = head2;

    while(head) {
        if (head.val < x) {
            pre1 = head;
        } else {
            pre1.next = head.next;
            pre2.next = head;
            pre2 = head;
        }

        head = head.next;
    }

    pre2.next = null;
    pre1.next = head2.next;

    return head1.next;
};

module.exports = partition;
