/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if (!root) {
        return 0;
    }

    return help(root, 0);
};

function help(node, cur) {
    cur = cur * 10 + node.val;
    if (!node.left && !node.right) {
        return cur;
    }
    const left = node.left ? help(node.left, cur) : 0;
    const right = node.right ? help(node.right, cur) : 0;
    return left + right;
}

module.exports = sumNumbers;
