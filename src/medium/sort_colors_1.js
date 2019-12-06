/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let counts = Array(3).fill(0);

    for (let i = 0; i < nums.length; i++) {
        counts[nums[i]]++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (i < counts[0]) {
            nums[i] = 0;
        } else if (i < counts[0] + counts[1]) {
            nums[i] = 1;
        } else {
            nums[i] = 2;
        }
    }
};

module.exports = sortColors;
