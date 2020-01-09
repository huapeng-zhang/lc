/**
 * merge sort
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let bufSize = (nums.length >> 1) + 1;
    const buf = new Array(bufSize);
    topDownMergeSort(nums, 0, nums.length - 1, buf, nums, 0);
    return nums;
};

/**
 * 归并排序
 * • 稳定
 * @param {number[]} src 需要排序的数组
 * @param {number} srcStartPos 需要排序的起始位置（包含）
 * @param {number} srcEndPos 需要排序的结束位置（包含）
 * @param {number[]} buf 排序缓存，大小至少为src的一半
 * @param {number[]} target 用来保存排序之后的目标数组
 * @param {number} targetStartPos 目标数组的起始保存位置
 */
function topDownMergeSort(src, srcStartPos, srcEndPos, buf, target, targetStartPos) {
    if (srcEndPos === srcStartPos) {
        return;
    }
    const mid = ((srcEndPos - srcStartPos) >> 1) + srcStartPos;
    // 递归排序数组的前半段，使用buf作为缓存，将结果保存到src中
    topDownMergeSort(src, srcStartPos, mid, buf, src, srcStartPos);

    // 递归排序数组后半段，使用buf作为缓存，将结果保存到buf中
    if (srcEndPos - mid - 1 > 0) {
        topDownMergeSort(src, mid+1, srcEndPos, buf, buf, 0);
    } else {
        buf[0] = src[mid+1];
    }
    merge(src, srcStartPos, mid, buf, 0, srcEndPos-mid-1, target, targetStartPos);
}

/**
 * 合并list1、list2，将结果保存到target数组中。
 * 注意：在合并的过程中必须先从高位到低位的顺序，目标数组可以是list1或list2中的一个。
 * @param {number[]} list1
 * @param {number} startPos1
 * @param {number} endPos1
 * @param {number[]} list2
 * @param {number} startPos2
 * @param {number} endPos2
 * @param {number[]} target
 * @param {number} startPos
 */
function merge(list1, startPos1, endPos1, list2, startPos2, endPos2, target, startPos) {
    let endPos = startPos + endPos1 + endPos2 - startPos1 - startPos2 + 1;
    while (startPos1 <= endPos1 && startPos2 <= endPos2) {
        if (list1[endPos1] < list2[endPos2]) {
            target[endPos--] = list2[endPos2--];
        } else {
            target[endPos--] = list1[endPos1--];
        }
    }

    while (startPos1 <= endPos1) target[endPos--] = list1[endPos1--];
    while (startPos2 <= endPos2) target[endPos--] = list2[endPos2--];
}

module.exports = {
    description: 'merge sort - top down',
    content: sortArray
};
