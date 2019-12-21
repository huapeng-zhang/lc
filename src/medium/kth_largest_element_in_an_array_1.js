const { minHeapify, minJustify } = require('@model/heap');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    minHeapify(nums, k-1);
    for (let i = k; i < nums.length; i++) {
        if (nums[0] < nums[i]) {
            nums[0] = nums[i];
            minJustify(nums, 0, k-1);
        }
    }

    return nums[0];
};

module.exports = findKthLargest;
