
function dominationNum(nums) {
    if (!nums || !nums.length) {
        return null;
    }

    const summary = {val: null, count: 0};
    for (let i = 0; i < nums.length; i++) {
        if (summary.count === 0) {
            summary.val = nums[i];
        } else if (summary.val === nums[i]) {
            summary.count++;
        } else {
            summary.count--;
        }
    }

    return summary.val;
}

module.exports = dominationNum;
