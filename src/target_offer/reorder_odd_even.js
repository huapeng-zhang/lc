
function reorderOddEvent(nums) {
    if (!nums || !nums.length) {
        return nums;
    }

    let lowIdx = 0;
    let highIdx = nums.length - 1;

    while(true) {
        while(lowIdx < highIdx && (nums[lowIdx] & 1) === 1) lowIdx++;
        while(highIdx > lowIdx && (nums[highIdx] & 1) === 0) highIdx--;

        if (lowIdx >= highIdx) {
            break;
        }

        const temp = nums[lowIdx];
        nums[lowIdx] = nums[highIdx];
        nums[highIdx] = temp;

        lowIdx++;
        highIdx--;
    }

    return nums;
}

module.exports = reorderOddEvent;
