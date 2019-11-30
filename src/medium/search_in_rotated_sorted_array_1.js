/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let startPos = 0;
    let endPos = nums.length - 1;

    while (startPos <= endPos) {
        const midPos = ((startPos + endPos) >> 1);

        if (nums[midPos] === target) {
            return midPos;
        } else if (nums[startPos] > nums[midPos]) {
            if (target <= nums[endPos] && target > nums[midPos]) {
                startPos = midPos + 1;
            } else {
                endPos = midPos - 1;
            }
        } else {
            if (target >= nums[startPos] && target < nums[midPos]) {
                endPos = midPos - 1;
            } else {
                startPos = midPos + 1;
            }
        }
    }

    return -1;
};

module.exports = search;
