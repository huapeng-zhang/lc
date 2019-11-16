/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
            count++;
        } else if (majority === nums[i]) {
            count++;
        } else {
            count--;
        }
    }

    return majority;
};

module.exports = majorityElement;