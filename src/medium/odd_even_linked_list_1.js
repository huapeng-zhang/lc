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
var oddEvenList = function(head) {
    const oddHead = {};
    const evenHead = {};

    let node = head;
    let odd = oddHead;
    let even = evenHead;
    while(node) {
        odd.next = node;
        odd = node;
        node = node.next;

        if (node) {
            even.next = node;
            even = node;
            node = node.next;
        }
    }

    even.next = null;
    odd.next = evenHead.next;
    return oddHead.next;
};

module.exports = oddEvenList;
