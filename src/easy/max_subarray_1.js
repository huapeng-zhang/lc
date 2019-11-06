const maxSubArray = function(nums) {
    let max = nums[0];
    toPrefixSum(nums);

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (i == 0) {
                if (max < nums[j]) {
                    max = nums[j];
                }
            } else {
                if (max < nums[j] - nums[i-1]) {
                    max = nums[j] - nums[i-1];
                }
            }
        }
    }
    return max;
};

function toPrefixSum(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            continue;
        }
        nums[i] = nums[i] + nums[i-1];
    }
}

module.exports = maxSubArray;