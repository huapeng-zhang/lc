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
var postorderTraversal = function(root) {
    const output = [];

    if (!root) {
        return output;
    }
    help(root, output);
    return output;
};

function help(node, output) {
    node.left && help(node.left, output);
    node.right && help(node.right, output);

    output.push(node.val);
}

module.exports = postorderTraversal;
