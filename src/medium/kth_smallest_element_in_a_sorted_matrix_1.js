/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const minHeap = [];
    let heapEnd = matrix.length - 1;
    for (let i = 0; i < matrix.length; i++) {
        minHeap.push({
            val: matrix[0][i],
            row: 0,
            col: i
        });
    }
    heapify(minHeap, heapEnd);
    for (let i = 0; i < k-1; i++) {
        let min = minHeap[0];
        if (min.row === matrix.length - 1) {
            minHeap[0] = minHeap[heapEnd];
            heapEnd--;
        } else {
            minHeap[0] = {
                val: matrix[min.row+1][min.col],
                row: min.row+1,
                col: min.col
            }
        }
        justify(0, minHeap, heapEnd);
    }
    return minHeap[0].val;
};

function justify(startPos, heap, endPos) {
    let lPos = (startPos << 1) + 1;
    let rPos  = lPos + 1;

    if (lPos > endPos) {
        return;
    }

    let minPos = heap[startPos].val < heap[lPos].val ? startPos : lPos;
    rPos <= endPos && heap[rPos].val < heap[minPos].val && (minPos = rPos);

    if (minPos === startPos) {
        return;
    }
    let temp = heap[startPos];
    heap[startPos] = heap[minPos];
    heap[minPos] = temp;

    justify(minPos, heap, endPos);
}

function heapify(heap, endPos) {
    for (let i = (endPos - 1) >> 1; i >= 0; i--) {
        let lPos = (i << 1) + 1;
        let rPos = lPos + 1;

        let minPos = heap[i].val < heap[lPos].val ? i : lPos;
        rPos <= endPos && heap[rPos].val < heap[minPos].val && (minPos = rPos);

        if (minPos === i) {
            continue;
        }

        let temp = heap[i];
        heap[i] = heap[minPos];
        heap[minPos] = temp;
        justify(minPos, heap, endPos);
    }
}

module.exports = kthSmallest;
