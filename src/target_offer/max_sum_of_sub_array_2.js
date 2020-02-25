
function maxSubSum(nums) {
    if (!nums || !nums.length) {
        return null;
    }

    let s = nums[0];
    let max = s;
    for (let i = 1; i < nums.length; i++) {
        if (s < 0) {
            s = nums[i];
        } else {
            s += nums[i];
        }

        if (max < s) {
            max = s;
        }
    }

    return max;
}

module.exports = maxSubSum;
