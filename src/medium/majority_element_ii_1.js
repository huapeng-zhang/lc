/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const eles = [];
    const counts = [0, 0];

    for (let i = 0; i < nums.length; i++) {
        if (eles[0] === nums[i]) {
            counts[0]++;
        } else if (eles[1] === nums[i]) {
            counts[1]++
        } else if (counts[0] === 0) {
            eles[0] = nums[i];
            counts[0] = 1;
        } else if (counts[1] === 0) {
            eles[1] = nums[i];
            counts[1] = 1;
        } else if (eles.length === 2) {
            counts[0]--;
            counts[1]--;
        } else {
            eles.push(nums[i]);
            counts.push(1);
        }
    }

    const ret = [];
    const limit = Math.floor(nums.length/3);
    counts[0] = 0;
    counts[1] = 0;
    for (let i = 0; i < nums.length; i++) {
        eles[0] === nums[i] && (counts[0]++);
        eles[1] === nums[i] && (counts[1]++);

        if (counts[0] > limit && counts[1] > limit) {
            break;
        }
    }
    counts[0] > limit && ret.push(eles[0]);
    counts[1] > limit && ret.push(eles[1]);

    return ret;
};

module.exports = majorityElement;
