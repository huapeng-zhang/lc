/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const mockHead = {
        next: head
    };

    let node = mockHead;
    while(node.next && node.next.next) {
        const first = node.next;
        node.next = first.next;
        first.next = first.next.next;
        node.next.next = first;

        node = first;
    }

    return mockHead.next;
};

module.exports = swapPairs;
