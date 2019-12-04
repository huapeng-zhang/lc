/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals || !intervals.length) {
        return [];
    }

    const head = {};
    for (let i = 0; i < intervals.length; i++) {
        let pre = head;
        let node = head.next;
        let start = intervals[i][0];
        let end = intervals[i][1];
        while (node) {
            if (intervals[i][1] >= node.data[0] && intervals[i][0] <= node.data[1]) {
                start = start < node.data[0] ? start : node.data[0];
                end = end > node.data[1] ? end : node.data[1];

                pre.next = node.next;
                node = node.next;
            } else if (end < node.data[0]) {
                break;
            } else {
                pre = node;
                node = node.next;
            }
        }
        pre.next = {
            data: [start, end],
            next: pre.next
        };
    }

    const result = [];
    let node = head.next;
    while(node) {
        result.push(node.data);
        node = node.next;
    }
    return result;
};

module.exports = merge;
