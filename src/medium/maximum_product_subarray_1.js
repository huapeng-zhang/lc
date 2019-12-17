/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0];
    let curMax = nums[0];
    let curMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const temp = curMax;
        curMax = Math.max(nums[i], curMax*nums[i], curMin*nums[i]);
        curMin = Math.min(nums[i], temp*nums[i], curMin*nums[i]);

        (curMax > res) && (res = curMax);
    }
    return res;
};

module.exports = maxProduct;
