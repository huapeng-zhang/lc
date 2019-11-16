/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let a = 0;
    let b = 0;

    for (i = 0; i < nums.length; i++) {
        let curMax = (a + nums[i]) > b ? (a + nums[i]) : b;
        a = b;
        b = curMax;
    }

    return b;
};

module.exports = rob;