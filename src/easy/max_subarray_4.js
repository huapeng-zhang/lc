const maxSubArray = function(nums) {
    let curMax = 0;
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        curMax = curMax > 0 ? curMax + nums[i] : nums[i];

        if (max < curMax) {
            max = curMax;
        }
    }

    return max;
};

module.exports = maxSubArray;