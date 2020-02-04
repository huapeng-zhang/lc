/**
 * quick sort numbers
 * @param {number[]} nums
 * @return {number[]} original array
 */
function sort (nums) {
    if (!nums) {
        return null;
    }

    quickSort(nums, 0, nums.length-1);
    return nums;
}

/**
 * quick sort
 * • 不稳定
 * @param {number[]} nums
 * @param {number} startPos
 * @param {number} endPos
 * @return {undefined}
 */
function quickSort(nums, startPos, endPos) {
    if (startPos >= endPos) {
        return;
    }

    const p = partition(nums, startPos, endPos);
    quickSort(nums, startPos, p-1);
    quickSort(nums, p+1, endPos);
}

/**
 * 选取中间元素作为pivot，移动元素使之满足左侧元素小于等于pivot，右侧元素大于等于pivot
 *
 * @param {number[]} nums
 * @param {number} startPos
 * @param {number} endPos
 * @return {number} the partition position
 */
function partition(nums, startPos, endPos) {
    const pivotPos = ((endPos-startPos) >> 1) + startPos;
    const pivot = nums[pivotPos];

    // 交换pivot和最后一个元素
    nums[pivotPos] = nums[endPos];
    nums[endPos] = pivot;

    // 用来记录当前最后一个比pivot小的元素位置
    // 下一个比pivot小的可用位置需要加一
    let smallPos = startPos - 1;
    for (let i = startPos; i < endPos; i++) {
        if (nums[i] < pivot) {
            smallPos++;

            if (smallPos !== i) {
                const temp = nums[i];
                nums[i] = nums[smallPos];
                nums[smallPos] = temp;
            }
        }
    }

    smallPos++;
    nums[endPos] = nums[smallPos];
    nums[smallPos] = pivot;
    return smallPos;
}

module.exports = sort;
