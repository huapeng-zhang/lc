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
    let dummy = {next: head};
    let prev = dummy;
    let node = head;
    while (node !== null) {
        while (node !== null && node.val === val) {
            node = node.next;
        }

        prev.next = node;
        prev = node;

        if (node !== null) {
            node = node.next;
        }
    }

    return dummy.next;
};