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
    const vals1 = [];
    const vals2 = [];

    while (l1) {
        vals1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        vals2.push(l2.val);
        l2 = l2.next;
    }


    let carry = 0;
    let node = null;
    let pos1 = vals1.length - 1;
    let pos2 = vals2.length - 1;

    while(pos1 >= 0 || pos2 >= 0 || carry > 0) {
        let sum = carry;
        sum += pos1 >= 0 ? vals1[pos1--] : 0;
        sum += pos2 >= 0 ? vals2[pos2--] : 0;

        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        } else {
            carry = 0;
        }

        node = {
            val: sum,
            next: node
        }
    }
    return node;
};

module.exports = addTwoNumbers;
