
function dominatingNum(nums) {
    if (!nums || !nums.length) {
        return null;
    }

    let targetPos = nums.length >> 1;
    let startPos = 0;
    let endPos = nums.length - 1;

    while (true) {
        let p = partition(nums, startPos, endPos);

        if (p === targetPos) {
            return nums[p];
        } else if (p < targetPos) {
            startPos = p + 1;
        } else {
            endPos = p - 1;
        }
    }
}

function partition(nums, startPos, endPos) {
    if (startPos === endPos) {
        return startPos;
    }

    const pivot = nums[endPos];
    let lowerPos = startPos - 1;
    for (let i = startPos; i < endPos; i++) {
        if (nums[i] < pivot) {
            lowerPos++;
            if (lowerPos !== i) {
                const temp = nums[lowerPos];
                nums[lowerPos] = nums[i];
                nums[i] = temp;
            }
        }
    }

    lowerPos++;
    nums[endPos] = nums[lowerPos];
    nums[lowerPos] = pivot;
    return lowerPos;
}

module.exports = dominatingNum;
