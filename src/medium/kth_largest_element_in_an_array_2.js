const { quickSelect } = require('@model/quick_sort');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSelect(nums, nums.length-k);
};

module.exports = findKthLargest;
