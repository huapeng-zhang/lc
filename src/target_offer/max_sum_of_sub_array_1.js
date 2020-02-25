
function maxSubSum(nums) {
    if (!nums || !nums.length) {
        return null;
    }

    let s = nums[0];
    let e = nums[0];
    let max = s;

    for (let i = 1; i < nums.length; i++) {
        if (e + nums[i] > s) {
            s = e + nums[i];
        }

        if (e > 0) {
            e = e + nums[i];
        } else {
            e = nums[i];
        }

        if (s > max) {
            max = s;
        }
    }

    return max;
}

module.exports = maxSubSum;
