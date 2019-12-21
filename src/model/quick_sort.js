/**
 * select the nth big element from an array
 * @param {number[]} nums
 * @param {number} nth
 * @returns {number}
 */
function quickSelect(nums, nth) {
    let start = 0;
    let end = nums.length-1;
    while (true) {
        let pivot = nums[start];
        let lowPos = start;
        let highPos = end;

        while (lowPos < highPos) {
            while (lowPos < highPos && nums[highPos] >= pivot) highPos--;
            nums[lowPos] = nums[highPos];
            while (lowPos < highPos && nums[lowPos] <= pivot) lowPos++;
            nums[highPos] = nums[lowPos];
        }
        nums[lowPos] = pivot;

        if (lowPos === nth) {
            return nums[lowPos];
        } else if (lowPos < nth) {
            start = lowPos + 1;
        } else {
            end = lowPos - 1;
        }
    }
}

module.exports = {
    quickSelect
};
