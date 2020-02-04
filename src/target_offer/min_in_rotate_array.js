
function minInRotateArray(nums) {
    if (!nums || !nums.length) {
        return null;
    }

    let startPos = 0;
    let endPos = nums.length-1;

    while(startPos <= endPos) {
        const midPos = ((endPos-startPos) >> 1) + startPos;

        if (nums[midPos] >= nums[endPos]) {
            startPos = midPos+1;
        } else {
            endPos = midPos;
        }
    }

    return nums[endPos];
}

module.exports = minInRotateArray;
