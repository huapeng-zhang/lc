/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const start = {next: null};

    // 保存上一段的结束节点
    let prevSeg = start;
    // 保存本段的开始节点，在处理下一段时将作为上一段的结束节点
    let segStart = head;
    // 处理前的上一个节点
    let prev = null;
    // 当前处理的节点
    let cur = head;
    // 用以存在处理前的下一个节点
    let next;
    // 记录当前端已处理的个数
    let segCount = 0;

    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;

        segCount++;
        // 当前端已处理的节点数目达到k个
        if (segCount === k) {
            segCount = 0;
            prevSeg.next = cur;
            prevSeg = segStart;
            segStart = next;
            prev = null;
        }
        cur = next;
    }

    // 最后一段的节点个数不足k个，再次处理，使其恢复原顺序
    if (segCount > 0) {
        cur = prev;
        prev = null;

        while (cur) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        prevSeg.next = prev;
    }

    return start.next;
};

module.exports = reverseKGroup;
