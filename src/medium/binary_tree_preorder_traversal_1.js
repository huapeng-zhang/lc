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

    let node = root;
    while(node) {
        stack.push(node);
        ret.push(node.val);
        node = node.left;
    }

    while(stack.length) {
        node = stack.pop();

        node = node.right;
        while (node) {
            stack.push(node);
            ret.push(node.val);
            node = node.left;
        }
    }

    return ret;
};

module.exports = preorderTraversal;
