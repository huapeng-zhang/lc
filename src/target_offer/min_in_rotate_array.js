
function minInRotateArray(nums) {
    if (!nums || !nums.length) {
        return null;
    }

    let startPos = 0;
    let endPos = nums.length-1;

    while(startPos < endPos) {
        const midPos = ((endPos-startPos) >> 1) + startPos;

        // 必须先判断midPos是否落到后半部分因为：
        // 1. 递增数组也是旋转数组，旋转量为0
        // 2. 旋转量非0的旋转数组在循环的过程中也会落到后半部分
        if (nums[midPos] < nums[endPos]) {
            endPos = midPos;
        } else if (nums[startPos] < nums[midPos]) {
            startPos = midPos + 1;
        // nums[startPos] === nums[endPos] === nums[midPos]情况无法判断midPos落在哪一部分
        // 此时必须回退到顺序查找，确定midPos落入的区域
        } else {
            for (let i = midPos+1; i <= endPos; i++) {
                if (nums[i] === nums[midPos]) {
                    continue;
                    // 若后面的元素值增大，则说明落入前半区域
                } else if (nums[i] > nums[midPos]) {
                    startPos = i;
                    break;
                    // 若后面的元素减小，则说明可以直接
                } else if (nums[i] < nums[midPos]) {
                    return nums[i];
                }
            }

            endPos = midPos;
        }
    }

    return nums[endPos];
}

module.exports = minInRotateArray;
