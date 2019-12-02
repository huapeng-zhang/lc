/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    help(result, [], nums);
    return result;
};

function help(result, list, nums) {
    if (list.length === nums.length) {
        result.push([...list]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== null) {
            const cur = nums[i];
            list.push(cur);
            nums[i] = null;
            help(result, list, nums);
            nums[i] = cur;
            list.pop();
        }
    }
}

module.exports = permute;