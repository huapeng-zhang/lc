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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const ret = [];

    backtrack(root, sum, [], ret);
    return ret;
};

function backtrack(node, target, list, result) {
    if (node && !node.left && !node.right && node.val === target) {
        result.push([...list, node.val]);
        return;
    } else if (!node) {
        return;
    }

    list.push(node.val);
    backtrack(node.left, target-node.val, list, result);
    backtrack(node.right, target-node.val, list, result);
    list.pop();
}

module.exports = pathSum;
