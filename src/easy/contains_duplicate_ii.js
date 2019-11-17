/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const pos = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (pos[num] === (void 0)) {
            pos[num] = i;
        } else if (i - pos[num] <= k) {
            return true;
        } else {
            pos[num] = i;
        }
    }

    return false;
};

module.exports = containsNearbyDuplicate;