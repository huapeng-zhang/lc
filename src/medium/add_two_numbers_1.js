/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carried = 0;

    let prev = null;
    let head = null;
    while(l1 || l2 || carried !== 0) {
        let n1 = 0;
        let n2 = 0;
        if (l1) {
            n1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            n2 = l2.val;
            l2 = l2.next;
        }

        const node = {
            val: (n1+n2+carried)%10,
            next: null
        };

        if (prev) {
            prev.next = node;
        } else {
            head = node;
        }

        prev = node;
        carried = Math.floor((n1+n2+carried)/10);
    }

    return head;
};

module.exports = addTwoNumbers;
