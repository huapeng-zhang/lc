/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 假定，nums1的长度 >= nums2的长度
    if (nums1.length < nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    // 中位数左边的总长度（包含中位数）
    const targetCount = (nums1.length+nums2.length+1) >> 1;

    // 使用nums1进行二分搜索
    let lowIdx = targetCount - nums2.length;
    let highIdx = targetCount;
    let midIdx;
    while (1) {
        // 将nums分割为两个部分，[0, midIdx-1]左半部分和[midIdx, nums1.length-1]右半部分
        midIdx = (lowIdx+highIdx) >> 1;
        // 计算出nums2的分割点，将nums2分成[0, parIdx-1]左半部分和[parIdx, nums2.length]右半部分
        // 使得nums1左半部分和nums2左半部分元素个数只和为targetCount
        const parIdx = targetCount - midIdx;

        const maxLeft1 = midIdx === 0 ? Number.MIN_VALUE : nums1[midIdx-1];
        const minRight1 = midIdx === nums1.length ? Number.MAX_VALUE : nums1[midIdx];
        const maxLeft2 = parIdx === 0 ? Number.MIN_VALUE : nums2[parIdx-1];
        const minRight2 = parIdx === nums2.length ? Number.MAX_VALUE : nums2[parIdx];

        // 如该分割满足所有左边的数小于右边的数，则说明有效
        // max(maxLeft1, maxLeft2)则为找到的第一个中位数
        if (minRight1 >= maxLeft2 && minRight2 >= maxLeft1) {
            let first;
            midIdx > 0 && (first = nums1[midIdx-1]);
            parIdx > 0 && (first === undefined || nums2[parIdx-1] > first) && (first = nums2[parIdx-1]);
            // 若总数为奇数，仅有一个中位数
            if ((nums1.length+nums2.length) & 1) {
                return first;
            }
            // 否则，有两个中位数，需要求这两个中位数的均值
            let second;
            midIdx < nums1.length && (second = nums1[midIdx]);
            parIdx < nums2.length && (second === undefined || nums2[parIdx] < second) && (second = nums2[parIdx]);
            return (first+second)/2;
        // 若nums1左边的最大值 > nums2右边的最小值，则说明nums1选多了
        } else if (maxLeft1 > minRight2) {
            highIdx = midIdx-1;
        // 否则说明nums1选少了
        } else {
            lowIdx = midIdx+1;
        }
    }
};

module.exports = findMedianSortedArrays;
