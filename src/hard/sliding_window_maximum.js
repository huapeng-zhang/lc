
function slidingMax(nums, k) {
    const queue = [];
    const output = [];

    if (!nums || !nums.length) {
        return output;
    }

    for (let i = 0; i < k; i++) {
        const num = nums[i];

        let delCount = 0;
        let j = queue.length - 1;
        while (j >= 0 && queue[j--] < num) delCount++;
        if (delCount > 0) {
            queue.splice(queue.length-delCount, delCount);
        }
        queue.push(num);
    }
    output.push(queue[0]);

    for (let i = k; i < nums.length; i++) {
        const outNum = nums[i-k];
        const inNum = nums[i];

        if (outNum === queue[0]) {
            queue.shift();
        }

        let delCount = 0;
        let j = queue.length - 1;
        while (j >= 0 && queue[j--] < inNum) delCount++;
        if (delCount > 0) {
            queue.splice(queue.length - delCount, delCount);
        }
        queue.push(inNum);
        output.push(queue[0]);
    }

    return output;
}

module.exports = slidingMax;
