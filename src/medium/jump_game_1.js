/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (!nums || !nums.length) {
        return true;
    }

    let availableStep = 0;
    for (let i = 0; i < nums.length; i++) {
        availableStep = nums[i] > availableStep ? nums[i] : availableStep;

        if (availableStep === 0 && i !== nums.length - 1) {
            return false;
        } else if (availableStep >= nums.length - i - 1) {
            return true;
        }
        availableStep--;
    }

    return true;
};

module.exports = canJump;
