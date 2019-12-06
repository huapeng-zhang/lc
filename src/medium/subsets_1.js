/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (!nums.length) {
        return [[]];
    }
    return help(nums, nums.length-1);
};

function help(nums, endPos) {
    if (endPos === 0) {
        return [[], [nums[0]]];
    }

    const preRet = help(nums, endPos - 1);
    const len = preRet.length;
    for (let i = 0; i < len; i++) {
        const item = preRet[i];
        preRet.push([...item, nums[endPos]]);
    }
    return preRet;
}

module.exports = subsets;
