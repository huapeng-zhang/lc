/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ret = [];
    let eles1 = {};

    for (let i = 0; i <nums1.length; i++) {
        eles1[nums1[i]] = true;
    }

    for (let i = 0; i < nums2.length; i++) {
        if (eles1[nums2[i]] === true) {
            ret.push(nums2[i]);
            eles1[nums2[i]] = false;
        }
    }

    return ret;
};

module.exports = intersection;