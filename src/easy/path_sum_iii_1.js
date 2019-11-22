/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (root === null) {
        return 0;
    }

    let count = help(root, 0, sum);

    count += pathSum(root.left, sum);
    count += pathSum(root.right, sum);
    return count;
};

function help(node, acc, target) {
    if (!node) {
        return 0;
    }

    const curAcc = acc + node.val;
    return help(node.left, curAcc, target) + help(node.right, curAcc, target) + (curAcc === target ? 1 : 0);
}

module.exports = pathSum;