
function maxConsecutiveSeq(nums) {
    if (!nums) {
        return 0;
    }

    const hash = new Set(nums);
    let max = 0;
    nums.forEach(num => {
        if (hash.has(num-1)) {
            return;
        }

        let end = num;
        while (hash.has(++end));
        if (end - num > max) {
            max = end - num;
        }
    });
    return max;
}

module.exports = maxConsecutiveSeq;
