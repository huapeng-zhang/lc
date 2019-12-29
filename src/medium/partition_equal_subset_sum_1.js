/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum % 2 !== 0) {
        return false;
    }
    const target = sum >> 1;
    const dp = new Array(target+1).fill(false);
    dp[0] = true;
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j-nums[i]];
        }
    }

    return dp[target];
};

module.exports = canPartition;
