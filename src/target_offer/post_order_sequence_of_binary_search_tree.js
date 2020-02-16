
function isPostOrderSequenceWrap(inputs) {
    if (!inputs || !inputs.length) {
        return true;
    }

    return isPostOrderSequence(inputs, 0, inputs.length - 1);
}

function isPostOrderSequence(nums, startPos, endPos) {
    if (endPos <= startPos) {
        return true;
    }

    const pivot = nums[endPos];
    let firstRangeEndPos = endPos-1;
    while (firstRangeEndPos >= startPos && nums[firstRangeEndPos] > pivot) firstRangeEndPos--;

    let ret = true;
    for (let i = startPos; i <= firstRangeEndPos; i++) {
        if (nums[i] > pivot) {
            ret = false;
            break;
        }
    }

    ret = ret && isPostOrderSequence(nums, startPos, firstRangeEndPos);
    ret = ret && isPostOrderSequence(nums, firstRangeEndPos+1, endPos-1);
    return ret;
}

module.exports = isPostOrderSequenceWrap;
