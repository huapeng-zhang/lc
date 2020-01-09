/**
 * quick sort
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
};

/**
 * 快速排序
 * • 不稳定
 * • 使用分治思想 divide and conquer
 * @param {number[]} data
 * @param {number} startPos
 * @param {number} endPos
 */
function quickSort(data, startPos, endPos) {
    if (startPos >= endPos) {
        return;
    }
    const p = partition(data, startPos, endPos);
    // 因为返回的位置不一定为pivot元素所在的位置，所以递归时需要包含该位置元素
    // 该实现将分割位置的元素放在第一段的递归中
    quickSort(data, startPos, p);
    quickSort(data, p+1, endPos);
}

/**
 * 确定分割位置。注意返回的分割位置要保持与主方法对应，以免产生死循环
 * @param {number[]} data
 * @param {number} startPos
 * @param {number} endPos
 * @return {number} 分割位置
 */
function partition(data, startPos, endPos) {
    // 计算中间位置，必须向零取整，确保返回的位置满足条件
    const midPos = ((endPos - startPos) >> 1) + startPos;
    const pivot = data[midPos];

    while(true) {
        // 注意循环中没有边界保护
        // 1. 开始时，pivot作为保护元素
        // 2. 循环一次过后，交换之后的元素成为保护元素，分别保护两端
        while (data[startPos] < pivot) startPos++;
        while (data[endPos] > pivot) endPos--;

        if (startPos < endPos) {
            const temp = data[startPos];
            data[startPos] = data[endPos];
            data[endPos] = temp;

            startPos++;
            endPos--;
        } else {
            // 返回的位置 startPos >= p < endPos
            // 确保与主方法对应，不会产生死循环
            return endPos;
        }
    }
}

module.exports = {
    description: 'quick sort',
    content: sortArray
};
