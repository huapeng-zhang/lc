/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (!nums || !nums.length) {
        return 0;
    }

    let start = 0;
    let end = 0;
    let total = nums[0];
    let minLen = Number.MAX_VALUE;
    while (end < nums.length) {
        if (total < s) {
            end++;
            total += nums[end];
        } else {
            if (end-start+1 < minLen) {
                minLen = end-start+1;
            }
            total -= nums[start];
            start++;
        }

        if (end === nums.length-1 && total < s) {
            break;
        }
    }

    return minLen === Number.MAX_VALUE ? 0 : minLen;
};

module.exports = minSubArrayLen;
