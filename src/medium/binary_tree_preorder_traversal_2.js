/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const stack = [];
    const ret = [];

    root && stack.push(root);
    while(stack.length) {
        let node = stack.pop();
        ret.push(node.val);

        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }

    return ret;
};

module.exports = preorderTraversal;
