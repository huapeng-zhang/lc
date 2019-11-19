/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroIndex = 0;
    let positiveIndex;

    while(true) {
        while(zeroIndex < nums.length && nums[zeroIndex] !== 0) {
            zeroIndex++;
        }
        positiveIndex = zeroIndex;
        while(positiveIndex < nums.length && nums[positiveIndex] === 0) {
            positiveIndex++;
        }

        if (zeroIndex >= nums.length || positiveIndex >= nums.length) {
            return;
        }

        nums[zeroIndex] = nums[positiveIndex];
        nums[positiveIndex] = 0;
        zeroIndex++;
        positiveIndex++;
    }
};

module.exports = moveZeroes;
