/**
 * heapify array nums, make nums to be a max heap.
 *
 * @param {number[]} nums
 * @param {number} endPos, the end position of the array that we want to heapify,
 * inclusive.
 * @return {undefined}
 */
function maxHeapify(nums, endPos) {
    // 从最后一个父节点开始往前扫描
    for (let i = ((endPos-1) >> 1); i >= 0; i--) {
        let leftChildPos = (i << 1) + 1;
        let rightChildPos = leftChildPos + 1;

        let maxPos;
        // 找到三个节点中最大的节点
        if (rightChildPos <= endPos) {
            maxPos = nums[leftChildPos] < nums[rightChildPos] ? rightChildPos : leftChildPos;
            maxPos = nums[i] < nums[maxPos] ? maxPos : i;
        } else {
            maxPos = nums[i] < nums[leftChildPos] ? leftChildPos : i;
        }

        if (maxPos === i) {
            continue;
        }

        // 若最大的节点不是父节点，则交换
        let tmp = nums[i];
        nums[i] = nums[maxPos];
        nums[maxPos] = tmp;

        // 交换后需从上往下调整影响的子树，确保处理过的森林仍然满足堆属性
        maxJustify(nums, maxPos, endPos);
    }
}

/**
 * justify nums array from the curPos, make sure the array is still max heap.
 *
 * @param {number[]} nums
 * @param {number} curPos, start position to justify the heap.
 * @param {number} endPos, the end position of the array, inclusive.
 * @return {undefined}
 */
function maxJustify(nums, curPos, endPos) {
    while (curPos < endPos) {
        const leftChildPos = (curPos << 1) + 1;
        const rightChildPos = leftChildPos + 1;

        let tmp;
        let maxPos;

        // 找到三个节点当中最大的节点
        if (rightChildPos <= endPos) {
            maxPos = nums[leftChildPos] < nums[rightChildPos] ? rightChildPos : leftChildPos;
            maxPos = nums[maxPos] < nums[curPos] ? curPos : maxPos;
        } else if (leftChildPos <= endPos) {
            maxPos = nums[curPos] < nums[leftChildPos] ? leftChildPos : curPos;
        } else {
            break;
        }

        // 若最大节点为父节点，则说明无需调整子树，子树仍然满足堆属性
        if (maxPos === curPos) {
            break;
        }
        // 若最大节点非父节点，则交换最大节点与父节点
        tmp = nums[curPos];
        nums[curPos] = nums[maxPos];
        nums[maxPos] = tmp;

        // 继续向下调整受到影响的子树
        curPos = maxPos;
    }
}

/**
 * heapify the array, let it to form a min heap.
 *
 * @param {number[]} nums
 * @param {number} endPos
 * @return {undefined}
 */
function minHeapify(nums, endPos) {
    // 从最后一个父节点开始往前扫描
    for (let i = ((endPos-1) >> 1); i >= 0; i--) {
        let leftChildPos = (i << 1) + 1;
        let rightChildPos = leftChildPos + 1;

        let minPos;
        // 找到三个节点中最大的节点
        if (rightChildPos <= endPos) {
            minPos = nums[leftChildPos] < nums[rightChildPos] ? leftChildPos : rightChildPos;
            minPos = nums[i] < nums[minPos] ? i : minPos;
        } else {
            minPos = nums[i] < nums[leftChildPos] ? i : leftChildPos;
        }

        // 若最大节点为父节点，无需处理
        if (minPos === i) {
            continue;
        }

        // 若最大节点不是父节点，则交换父节点与最大节点
        let tmp = nums[i];
        nums[i] = nums[minPos];
        nums[minPos] = tmp;

        // 调整受到影响的子树
        minJustify(nums, minPos, endPos);
    }
}


/**
 * justify the array from curPos position, make sure it still form a min heap.
 *
 * @param {number[]} nums
 * @param {number} curPos
 * @param {number} endPos
 * @return {undefined}
 */
function minJustify(nums, curPos, endPos) {
    while (curPos < endPos) {
        const leftChildPos = (curPos << 1) + 1;
        const rightChildPos = leftChildPos + 1;

        let tmp;
        let minPos;

        if (rightChildPos <= endPos) {
            minPos = nums[leftChildPos] < nums[rightChildPos] ? leftChildPos : rightChildPos;
            minPos = nums[minPos] < nums[curPos] ? minPos : curPos;
        } else if (leftChildPos <= endPos) {
            minPos = nums[curPos] < nums[leftChildPos] ? curPos : leftChildPos;
        } else {
            break;
        }

        if (minPos === curPos) {
            break;
        }
        tmp = nums[curPos];
        nums[curPos] = nums[minPos];
        nums[minPos] = tmp;

        curPos = minPos;
    }
}

module.exports = {
    maxHeapify,
    maxJustify,
    minHeapify,
    minJustify
};
