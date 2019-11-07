var merge = function(nums1, m, nums2, n) {
    let idx1 = m - 1;
    let idx2 = n - 1;
    let storeIdx = m + n - 1;

    while (idx2 >= 0) {
        if (idx1 < 0 || nums2[idx2] > nums1[idx1]) {
            nums1[storeIdx] = nums2[idx2];
            idx2--;
        } else {
            nums1[storeIdx] = nums1[idx1];
            idx1--;
        }
        storeIdx--;
    }

    return nums1;
};

module.exports = merge;
