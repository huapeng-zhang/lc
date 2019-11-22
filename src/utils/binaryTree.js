/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param [number] nums
 * @return {TreeNode} root
 */
function arrayToTree(nums) {
    return buildNode(nums, 0);
}

function isValidNum(num) {
    return num !== (void 0) && num !== null;
}

function buildNode(nums, index) {
    if (!nums || !nums.length || index >= nums.length || !isValidNum(nums[index])) {
        return null;
    }

    return {
        val: nums[index],
        left: buildNode(nums, 2*index+1),
        right: buildNode(nums, 2*index+2)
    };
}

module.exports = {
    arrayToTree
};
