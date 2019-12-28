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