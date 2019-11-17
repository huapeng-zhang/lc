/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummy = {next: head};
    let current = dummy;

    while(current && current.next) {
        let next = current.next;

        if (next.val === val) {
            current.next = next.next;
            next = next.next;
        }

        if (!next || next.val !== val) {
            current = next;
        }
    }

    return dummy.next;
};