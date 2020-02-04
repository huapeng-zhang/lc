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

    const partitionPos = partition(nums, startPos, endPos);
    quickSort(nums, startPos, partitionPos);
    quickSort(nums, partitionPos+1, endPos);
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

    while(true) {
        while(nums[startPos] < pivot) startPos++;
        while(nums[endPos] > pivot) endPos--;

        if (startPos < endPos) {
            const temp = nums[startPos];
            nums[startPos] = nums[endPos];
            nums[endPos] = temp;

            startPos++;
            endPos--;
        } else {
            return endPos;
        }
    }
}

module.exports = sort;
