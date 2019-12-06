/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ret = [];
    backtrack(ret, [], nums, 0);
    return ret;
};

function backtrack(list, tempList, nums, startPos) {
    list.push([...tempList]);

    for (let i = startPos; i < nums.length; i++) {
        tempList.push(nums[i]);
        backtrack(list, tempList, nums, i + 1);
        tempList.pop()
    }
}

module.exports = subsets;
