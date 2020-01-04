# LC
记录自己的LeetCode题解之路

[LeetCodeLogo]:./assets/images/LeetCode_logo_16.png
[ImportantIcon]:./assets/images/important_icon_16.png

## 需要重点关注的题目
### 简单题型
* [house robber](./src/easy/house_robber_1.js)
* [max sub-array](./src/easy/max_subarray_2.js)
* [sum of two integers](./src/easy/sum_of_two_integers_1.js)
* [path sum iii](./src/easy/path_sum_iii_1.js)

### 中等难度题型
* [three sum](./src/medium/3sum_1.js) [![problem link][LeetCodeLogo]](https://leetcode.com/problems/3sum/description/)
* [next permutation](./src/medium/next_permutation_1.js) [![problem link][LeetCodeLogo]](https://leetcode.com/problems/next-permutation/)
* [search in rotated sorted array](./src/medium/search_in_rotated_sorted_array_1.js) [![problem link][LeetCodeLogo]](https://leetcode.com/problems/search-in-rotated-sorted-array/)
* [combination sum](./src/medium/combination_sum_1.js) [![problem link][LeetCodeLogo]](https://leetcode.com/problems/combination-sum/)
* [combinatiion sum ii](./src/medium/combination_sum_ii_1.js) [![problem link][LeetCodeLogo]](https://leetcode.com/problems/combination-sum-ii/)
* [unique paths](./src/medium/unique_paths_2.js) [![problem link][LeetCodeLogo]](https://leetcode.com/problems/unique-paths/description/)
* [subsets](./src/medium/subsets_2.js)[![problem link][LeetCodeLogo]](https://leetcode.com/problems/subsets/)
* [sum root to leaf numbers](./src/medium/sum_root_to_leaf_numbers_2.js)[![problem link][LeetCodeLogo]](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
* [surrounded regions](./src/medium/surrounded_regions_1.js)[![problem link][LeetCodeLogo]](https://leetcode.com/problems/surrounded-regions)
* [palindrome partitioning](./src/medium/palindrome_partitioning_1.js)[![problem link][LeetCodeLogo]](https://leetcode.com/problems/palindrome-partitioning)
* [word break](./src/medium/word_break_1.js)[![problem link][LeetCodeLogo]](https://leetcode.com/problems/word-break)![important icon][ImportantIcon]
* [bitwise and of numbers range](./src/medium/bitwise_and_of_numbers_range_1.js)[![LeetCodeLogo]](https://leetcode.com/problems/bitwise-and-of-numbers-range)
![important icon][ImportantIcon]
* kth largest element in an array [![problem link][LeetCodeLogo]](https://leetcode.com/problems/kth-largest-element-in-an-array/). [solution 1](./src/medium/kth_largest_element_in_an_array_1.js) use heap, [solution 2](./src/medium/kth_largest_element_in_an_array_2.js) use quick select. ![important icon][ImportantIcon]
* maximal square[![problem link][LeetCodeLogo]](https://leetcode.com/problems/maximal-square/). Use dynamic programming. [solution 2](./src/medium/maximal_square_2.js) use just O(n) space. The extra space equals matrix col length. ![important icon][ImportantIcon]
* majority element ii [![problem link][LeetCodeLogo]](https://leetcode.com/problems/majority-element-ii/description/). [解法一](./src/medium/majority_element_ii_1.js)使用 "摩尔投票法"。
* LCA 二叉树最近共同祖先问题[![problem link][LeetCodeLogo]](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree). 
[递归解法](./src/medium/lowest_common_ancestor_of_a_binary_tree_2.js)递归结题的思路，在左子树、右子树查找两个节点，可能的结果有：
  * 该节点就是其中的一个节点，则返回该节点
  * 两个节点都不在左边，那么肯定都在右边，返回右边找到的节点
  * 两个节点都不在右边，那边肯定都在左边，返回左边找到的节点
  * 左右两边都找到一个节点，则返回当前节点
* search a 2d matrix ii.[![problem link][LeetCodeLogo]](https://leetcode.com/problems/search-a-2d-matrix-ii) [递归解法](./src/medium/search_a_2d_matrix_ii_1.js)
每次仅能将搜索区域缩减为之前的3/4，效率一般。[解法二](./src/medium/search_a_2d_matrix_ii_2.js)从左下角或右上角扫描矩阵，时间复杂度为O(m+n)代码简单，且有较高的效率。
* perfect square.[![problem link][LeetCodeLogo]](https://leetcode.com/problems/perfect-squares) [解法一](./src/medium/perfect_squares_1.js)使用动态规划，但转化方程较复杂。![important 
icon][ImportantIcon]
* best time to buy and sell stock with cooldown. [![problem link][LeetCodeLogo]](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown) 
非常经典的动态规划题目，状态转移方程比较复杂，需要两个方程。非常重要！![important icon][ImportantIcon]![important icon][ImportantIcon][递归解法](./src/medium/best_time_to_buy_and_sell_stock_with_cooldown_1.js)
* coin change. [![problem icon][LeetCodeLogo]](https://leetcode.com/problems/coin-change/description/)[动态规划解法](./src/medium/coin_change_1.js)
* increasing triple subsequence.[![problem link][LeetCodeLogo]](https://leetcode.com/problems/increasing-triplet-subsequence)![important icon][ImportantIcon]需要理解[解法](
./src/medium/increasing_triplet_subsequence_1.js)的思想：
  * 维护一个有序数组（仅通过两个变量的方式）
  * 更新数组使数组有更大的可能性满足条件
  * 更新数组要确保判断条件始终成立，即若更新后的数组满足条件，那么更新前的数组一定也满足条件
* water and jup problem. [![problem link][LeetCodeLogo]](https://leetcode.com/problems/water-and-jug-problem) ![important icon][ImportantIcon][裴蜀定理解法](
./src/medium/water_and_jug_problem_1.js). 了解哪些场景可以使用裴蜀定理以及**裴蜀定理**的内容：对于两个整数a, b其最大公约数定义为gcd(a,b)那么对于任意的两个正整数x,y，x*a+y*b其一定是gcd(a,b)的倍数。
* kth smallest element in a sorted matrix.[![problem link][LeetCodeLogo]](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix)![important 
icon][ImportantIcon][解法一](./src/medium/kth_smallest_element_in_a_sorted_matrix_1.js)使用堆来查找第k小的元素，需要注意某一列扫描完毕时堆的长度减一，以及如何缩减堆的长度。[解法二](
./src/medium/kth_smallest_element_in_a_sorted_matrix_2.js)使用二分查找，需要注意的是当找到某个数n，矩阵中小于等于n的个数为k时需要继续缩小搜索空间的上限，直到搜索空间不存在。此行为是为了避免矩阵中不存在n。
* partition equal subset sum. [![problem link][LeetCodeLogo]](https://leetcode.com/problems/partition-equal-subset-sum)![important icon][ImportantIcon]![important 
icon][ImportantIcon]使用经典的**背包问题**[解题](./src/medium/partition_equal_subset_sum_1.js)。
* 4 sum ii. [![problem link][LeetCodeLogo]](https://leetcode.com/problems/4sum-ii) [解法一](./src/medium/4sum_ii_1.js)将4层遍历缩减到2层遍历，但需要注意时间与空间优化的细节。
* ones and zeroes. [![problem link][LeetCodeLogo]](https://leetcode.com/problems/ones-and-zeroes)![important icon][ImportantIcon]![important icon][ImportantIcon][解法一](
./src/medium/ones_and_zeroes_1.js)使用**背包**思想。有两个背包，一个装zero一个装one。判断能否再装下一个字符串的条件时必须同时装下这个字符串中的zero和one。解题时需要注意的是在更新dp数组是需要从后往前更新，防止在一轮更新中后面的dp使用本轮之前更新的dp。[解法二](
./src/medium/ones_and_zeroes_2.js)首选尝试暴力破解带需要花费太长的时间，之后通过cache，减少重复扫描，减少运算时间。主要注意该解法中的key。
* coin change 2. [![problem link][LeetCodeLogo]](https://leetcode.com/problems/coin-change-2)![important icon][ImportantIcon]两种解法都使用**背包**解题思想。[解法一](./src/medium/coin_change_2_1
.js)使用常规的思路从后往前更新dp数组。由于不限制某种面额硬币的数量，[解法二](./src/medium/coin_change_2_2.js)采用从前向后更新dp数组，避免了最内层针对硬币面额的循环，提高了一定的效率。
* friend circles. [![problem link][LeetCodeLogo]](https://leetcode.com/problems/friend-circles)![important icon][ImportantIcon][解法一](./src/medium/friend_circles_1.js)
使用比较传统的DFS算法。[解法二](./src/medium/friend_circles_2.js)使用**Union Find**算法，简化了算法的复杂度，降低了运行时间。但需要注意在更新parent数组时更新的是最根节点的父节点。
* koko eating bananas. [![problem link][LeetCodeLogo]](https://leetcode.com/problems/koko-eating-bananas)[解法一](./src/medium/koko_eating_bananas_1.js)
使用简单的二分查找法寻找最小的吃香蕉速度，循环结束时(low === high)需要确保该最小值任然要满足吃完的条件，要注意**如何更新low和high**。
