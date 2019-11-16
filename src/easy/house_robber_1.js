/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const preMax = max(nums, nums.length);

    return preMax[0] > preMax[1] ? preMax[0] : preMax[1];
};

function max(nums, length) {
    if (length > 2) {
        const preMax = max(nums, length - 1);

        if (preMax[0] > preMax[1]) {
            return [preMax[0], preMax[0] + nums[length-1]];
        } else {
            return [preMax[1], preMax[0] + nums[length-1]];
        }
    } else if (length === 2) {
        return [nums[0], nums[1]]
    } else if (length === 1) {
        return [0, nums[0]]
    } else {
        return [0, 0];
    }
}

module.exports = rob;