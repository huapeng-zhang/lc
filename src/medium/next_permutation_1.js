/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (!nums || !nums.length) {
        return;
    }

    const length = nums.length;
    let sortPos = 0;

    let i = length - 2;
    while (i >= 0 && nums[i] >= nums[i+1])i--;

    if (i >= 0) {
        sortPos = i+1;
        for (let j = length - 1; j > i; j--) {
            if (nums[j] > nums[i]) {
                const temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                break;
            }
        }
    }

    if (nums[sortPos] === nums[length-1]) {
        return;
    }

    i = sortPos;
    let j = length-1;

    while (i < j) {
        const temp = nums[i];
        nums[i]  = nums[j];
        nums[j] = temp;

        i++;
        j--;
    }
};

module.exports = nextPermutation;
