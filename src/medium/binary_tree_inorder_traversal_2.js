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
var inorderTraversal = function(root) {
    let stack = [];
    let result = [];

    let node = root;
    while (node) {
        stack.push(node);
        node = node.left;
    }

    while(stack.length > 0) {
        node = stack.pop();
        result.push(node.val);

        node = node.right;
        while(node) {
            stack.push(node);
            node = node.left;
        }
    }

    return result;
};

module.exports = inorderTraversal;
