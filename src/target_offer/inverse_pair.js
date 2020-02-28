
function inversePair(src, starPos, endPos, buf, target, tStartPos) {
    if (endPos === starPos) {
        target[tStartPos] = src[starPos];
        return 0;
    }

    let count = 0;
    const midPos = ((endPos-starPos) >> 1) + starPos;
    count += inversePair(src, starPos, midPos, buf, src, starPos);
    count += inversePair(src, midPos+1, endPos, buf, buf, 0);

    let firstPos = midPos;
    let secondPos = endPos - midPos - 1;
    let targetPos = endPos - starPos + tStartPos;
    while (firstPos >= starPos && secondPos >= 0) {
        if (src[firstPos] > buf[secondPos]) {
            count += secondPos + 1;

            target[targetPos--] = src[firstPos--];
        } else {
            target[targetPos--] = buf[secondPos--];
        }
    }
    while (firstPos >= starPos) {
        target[targetPos--] = src[firstPos--];
    }
    while (secondPos >= 0) {
        target[targetPos--] = buf[secondPos--];
    }
    return count;
}

function inversePairHelp(nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    return inversePair(nums, 0, nums.length-1, [], nums, 0);
}

module.exports = inversePairHelp;
