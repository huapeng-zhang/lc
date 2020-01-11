/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    // dp[i]: 以数值i结尾的满足条件子串的长度
    const dp = {};
    let max = 1;

    for (let i = 0; i < arr.length; i++) {
        if (dp[arr[i]-difference] !== undefined) {
            dp[arr[i]] = dp[arr[i]-difference]+1;
            max = max > dp[arr[i]] ? max : dp[arr[i]];
        } else {
            dp[arr[i]] = 1;
        }
    }
    return max;
};

module.exports = longestSubsequence;
