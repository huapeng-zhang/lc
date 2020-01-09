/**
 * merge sort
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (!nums || !nums.length) {
        return nums;
    }
    const halfSize = (nums.length >> 1) + 1;
    const buf = new Array(halfSize);
    bottomUpMergeSort(nums, buf);
    return nums;
};

/**
 * 归并排序
 * • 0 ~ na 为已排序的部分，且长度分别为1，2，4，8；na之后为未排序部分
 * • nb 为buf中已排好序的数组部分
 * @param {number[]} nums
 * @param {number[]} buf
 */
function bottomUpMergeSort(nums, buf) {
    let na, nb;
    for (na = 1; na < nums.length; na += 2) {
        nb = 1;
        buf[0] = nums[na];
        while (na & (nb<<1)) {
            merge(nums, na-(nb<<1)+1, na-nb, buf, 0, nb-1, buf, 0);
            nb = nb<<1;
        }
        merge(nums, na-(nb<<1)+1, na-nb, buf, 0, nb-1, nums, na-(nb<<1)+1);
    }

    // 将没有整体排序的部分排序
    na = nums.length-1;
    buf[0] = nums[na];
    nb = 1;
    while(true) {
        let t = lsbit(na);
        na = na - t;
        if (na === 0) {
            merge(nums, 0, t-1, buf, 0, nb-1, nums, 0);
            return;
        }
        merge(nums, na, na+t-1, buf, 0, nb-1, buf, 0);
        nb += t;
    }
}

/**
 * 返回least significant bit
 * 例如 19的二进制位10011，那么该方法返回1；24的二进制位11000，那么该方法返回8
 * @param num
 * @returns {number}
 */
function lsbit(num) {
    if (num === 0) {
        return 0;
    }
    let ret = num - 1;
    ret = ret ^ num;
    ret = ret + 1;
    ret = ret >> 1;
    return ret;
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
    description: 'merge sort - bottom up',
    content: sortArray
};
