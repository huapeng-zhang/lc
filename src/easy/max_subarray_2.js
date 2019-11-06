const maxSubArray = function(nums) {
    return _maxSubArray(nums, 0, nums.length);
};

function _maxSubArray(nums, start, end) {
    if (end - start === 1) {
        return nums[start];
    }

    let midIdx = ((end-start) >> 1) + start;

    let partLMax = -Number.MAX_VALUE;
    let partRMax = 0;

    let sum = 0;
    for (let i = midIdx; i >= start; i--) {
        sum += nums[i];
        if (sum > partLMax) {
            partLMax = sum;
        }
    }
    sum = 0;
    for (let i = midIdx + 1; i < end; i++) {
        sum += nums[i];
        if (sum > partRMax) {
            partRMax = sum;
        }
    }

    const acrossMax = partRMax + partLMax;
    const lMax = _maxSubArray(nums, start, midIdx);
    const rMax = _maxSubArray(nums, midIdx, end);

    return Math.max(acrossMax, lMax, rMax);
}

module.exports = maxSubArray;