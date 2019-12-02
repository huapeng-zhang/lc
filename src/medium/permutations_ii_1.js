/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    nums.sort((a, b) => a -b);
    help(result, [], nums);
    return result;
};

function help(result, list, nums) {
    if (list.length === nums.length) {
        result.push([...list]);
        return;
    }

    let pre = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== null) {
            const cur = nums[i];

            if (cur === pre) {
                continue;
            } else {
                pre = cur;
            }
            list.push(cur);
            nums[i] = null;
            help(result, list, nums);
            nums[i] = cur;
            list.pop();
        }
    }
}

module.exports = permute;