/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const head = {};
    const heap = [];

    // 首先使用k个链表的头结点构造出小顶堆
    for (let i = 0; i < lists.length; i++) {
        lists[i] && heap.push(lists[i]);
    }
    heapify(heap, heap.length);

    let len = heap.length;
    let prev = head;
    // 若堆的大小为1，则跳出循环
    while (len > 1) {
        // 取出最小的顶点
        const minNode = heap[0];
        prev.next = minNode;
        prev = prev.next;

        // 若堆顶节点为其所在列表的尾结点，将堆尾节点移到堆顶，堆的长度减一
        if (minNode.next === null) {
            heap[0] = heap[len-1];
            len--;
        // 将堆顶节点之后的节点移到堆顶
        } else {
            heap[0] = minNode.next;
        }
        // 调整堆，使用重新成为小顶堆
        justify(heap,0, len);
    }

    prev.next = heap[0];
    return head.next || null;
};

/**
 * 将数组构造成小顶堆
 * @param {number[]} heap
 * @param {number} len
 */
function heapify(heap, len) {
    for (let i = (len-2) >> 1; i >= 0; i--) {
        justify(heap, i, len);
    }
}

/**
 * 从 startPos 位置开始调整heap，使其重新满足小顶堆
 * 调用者需要校验位置的合法性
 * @param {ListNode[]} heap
 * @param {number} startPos
 * @param {number} len
 */
function justify(heap, startPos, len) {
    const lchildIdx = (startPos << 1) + 1;

    // 找到父节点，左孩子节点，右孩子节点中最小的节点位置
    let minIdx = startPos;
    lchildIdx < len && heap[lchildIdx].val < heap[minIdx].val && (minIdx = lchildIdx);
    lchildIdx+1 < len && heap[lchildIdx+1].val < heap[minIdx].val && (minIdx = lchildIdx+1);

    // 若父节点即为最小节点，则直接返回
    if (startPos === minIdx) {
        return;
    }

    // 将父节点与最小的节点交换
    let temp = heap[minIdx];
    heap[minIdx] = heap[startPos];
    heap[startPos] = temp;

    // 递归检查收到影响的节点
    justify(heap, minIdx, len);
}

module.exports = mergeKLists;
