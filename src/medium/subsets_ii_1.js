/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a -b);
    const ret = [];
    backtrack(ret, [], 0, nums);
    return ret;
};

function backtrack(ret, list, startPos, nums) {
    ret.push([...list]);

    if (startPos >= nums.length) {
        return;
    }
    for (let i = startPos; i < nums.length; i++) {
        if (i > startPos && nums[i] === nums[i-1]) {
            continue;
        }
        list.push(nums[i]);
        backtrack(ret, list, i+1, nums);
        list.pop();
    }
}

module.exports = subsetsWithDup;
