/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }

    nums.sort((a, b) => a - b);

    const ret = [];
    for(let i = 0; i < nums.length; i++) {
        const diff = -nums[i];

        let leftPos = i + 1;
        let rightPos = nums.length - 1;

        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        while (leftPos < rightPos) {
            if (nums[leftPos] + nums[rightPos] === diff) {
                ret.push([nums[i], nums[leftPos], nums[rightPos]]);

                while (leftPos < rightPos && nums[leftPos] === nums[leftPos+1]) {
                    leftPos++;
                }
                leftPos++;
                while (rightPos > leftPos && nums[rightPos-1] === nums[rightPos]) {
                    rightPos--;
                }
                rightPos--;
            } else if (nums[leftPos] + nums[rightPos] < diff) {
                leftPos++;
            } else {
                rightPos--;
            }
        }
    }

    return ret;
};

module.exports = threeSum;