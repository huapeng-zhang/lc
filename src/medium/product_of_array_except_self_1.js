/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (!nums || !nums.length) {
        return [];
    }

    let ret = [1];
    let acc = 1;
    for (let i = 1; i < nums.length; i++) {
        acc = acc * nums[i-1];
        ret.push(acc);
    }
    acc = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ret[i] = acc * ret[i];
        acc = acc * nums[i];
    }

    return ret;
};

module.exports = productExceptSelf;
