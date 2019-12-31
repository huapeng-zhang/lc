/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let target = 0;
    let zeros = 0;
    for (let i = 0; i < nums.length; i++) {
        target += nums[i];
        nums[i] === 0 && zeros++;
    }
    if (S > target) {
        return 0;
    }
    target -= S;
    if (target % 2 !== 0) {
        return 0;
    }
    target = target >> 1;

    const dp = {};
    dp[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;
        for (let j = target; j >= nums[i]; j--) {
            let count = dp[j] || 0;
            if (dp[j-nums[i]] !== undefined) {
                dp[j] = dp[j-nums[i]]+count;
            }
        }
    }

    return ((dp[target] || 0) << zeros);
};

module.exports = findTargetSumWays;
