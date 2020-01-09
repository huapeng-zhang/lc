# 排序
## 快速排序
* 不稳定
* 使用分治思想
* 选取子数组的中间元素作为pivot，避免在有序的情况下算法退化
```
/**
 * 快速排序
 * • 不稳定
 * • 使用分治思想 divide and conquer
 * @param {number[]} data
 * @param {number} startPos
 * @param {number} endPos
 */
function quickSort(data, startPos, endPos) {
    if (startPos >= endPos) {
        return;
    }
    const p = partition(data, startPos, endPos);
    // 因为返回的位置不一定为pivot元素所在的位置，所以递归时需要包含该位置元素
    // 该实现将分割位置的元素放在第一段的递归中
    quickSort(data, startPos, p);
    quickSort(data, p+1, endPos);
}
```
```
/**
 * 确定分割位置。注意返回的分割位置要保持与主方法对应，以免产生死循环
 * @param {number[]} data
 * @param {number} startPos
 * @param {number} endPos
 * @return {number} 分割位置
 */
function partition(data, startPos, endPos) {
    // 计算中间位置，必须向零取整，确保返回的位置满足条件
    const midPos = ((endPos - startPos) >> 1) + startPos;
    const pivot = data[midPos];

    while(true) {
        // 注意循环中没有边界保护
        // 1. 开始时，pivot作为保护元素
        // 2. 循环一次过后，交换之后的元素成为保护元素，分别保护两端
        while (data[startPos] < pivot) startPos++;
        while (data[endPos] > pivot) endPos--;

        if (startPos < endPos) {
            const temp = data[startPos];
            data[startPos] = data[endPos];
            data[endPos] = temp;

            startPos++;
            endPos--;
        } else {
            // 返回的位置 startPos >= p < endPos
            // 确保与主方法对应，不会产生死循环
            return endPos;
        }
    }
}
```
## 归并排序
* 稳定
### top-down
```
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
```
### bottom-up
```
0   1 | 2   3 | 4   5 | 6   7 | 8   9 | 10  11 | 12  13 | 14  15 | 16  17 | 18  19
-----   -----   -----   -----   -----   ------   ------   ------   ------   ------
-------------   -------------   --------------   ---------------   ---------------
-----------------------------   --------------------------------
----------------------------------------------------------------
// 数字的二进制表示
    16 8 4 2 1
     - - - - -
1    0 0 0 0 1
3    0 0 0 1 1
5    0 0 1 0 1
7    0 0 1 1 1
9    0 1 0 0 1
11   0 1 0 1 1
13   0 1 1 0 1
15   0 1 1 1 1
17   1 0 0 0 1
19   1 0 0 1 1

14   0 1 1 1 0
12   0 1 1 0 0
// na的值分别为1，3，5 ... 19
// 若na的值为7时
// • 子数组[6,6]有序，长度为1
// • 子数组[4,5]有序，长度为2
// • 子数组[0,3]有序，长度为4
// 该次循环需要进行的排序
// • nums[7,7]                -> buf[0,0]
// • nums[6,6] merge buf[7,7] -> buf[6,7]
// • nums[4,5] merge buf[6,7] -> buf[4,7]
// • nums[0,3] merge buf[4,7] -> nums[0,7]
```
代码
```
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
```
