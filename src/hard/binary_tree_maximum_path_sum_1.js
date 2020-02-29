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
var maxPathSum = function(root) {
    if (!root) {
        return 0;
    }
    return help(root).full;
};

function help(node) {
    const left = node.left ? help(node.left) : null;
    const right = node.right ? help(node.right) : null;

    let sub = node.val;
    if (left && right) {
        sub += Math.max(left.sub, right.sub, 0);
    } else if (left && left.sub > 0) {
        sub += left.sub
    } else if (right && right.sub > 0) {
        sub += right.sub;
    }

    let full = node.val;
    if (left && left.sub > 0) {
        full += left.sub;
    }
    if (right && right.sub > 0) {
        full += right.sub;
    }
    if (left) {
        full = full > left.full ? full : left.full;
    }
    if (right) {
        full = full > right.full ? full : right.full;
    }

    return {sub, full}
}

module.exports = maxPathSum;
