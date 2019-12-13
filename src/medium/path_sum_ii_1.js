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
    help(root, sum, [], ret);
    return ret;
};

function help(node, target, list, result) {
    if (!node) {
        return;
    }

    list.push(node.val);

    if (node.val === target && !node.left && !node.right) {
        result.push([...list]);
    } else {
        node.left && help(node.left, target-node.val, list, result);
        node.right && help(node.right, target-node.val, list, result);
    }

    list.pop();
}

module.exports = pathSum;
