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

    const payload = {val: Number.MIN_SAFE_INTEGER};
    help(root, payload);
    return payload.val;
};

function help(node, payload) {
    let l = node.left ? help(node.left, payload) : Number.MIN_SAFE_INTEGER;
    let r = node.right ? help(node.right, payload) : Number.MIN_SAFE_INTEGER;

    let curMax = node.val;
    if (l > 0) {
        curMax += l;
    }
    if (r > 0) {
        curMax += r;
    }

    if (curMax > payload.val) {
        payload.val = curMax;
    }

    return (node.val + Math.max(l,r,0));
}

module.exports = maxPathSum;
