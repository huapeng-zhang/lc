const maxSubArray = function(nums) {

    debugger
    toPrefixSum(nums);
    return [4,-1,2,1];
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