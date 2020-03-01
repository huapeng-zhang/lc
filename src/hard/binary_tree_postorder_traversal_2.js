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
    const stack = [];

    if (root) {
        stack.push(root);
    }

    let lastVisitNode = null;
    while (stack.length) {
        const node = stack[stack.length-1];

        if ((!node.left && !node.right) ||
            (lastVisitNode && (node.left === lastVisitNode || node.right === lastVisitNode))) {
            stack.pop();
            lastVisitNode = node;
            output.push(node.val);
        } else {
            node.right && stack.push(node.right);
            node.left && stack.push(node.left)
        }
    }
    return output;
};

module.exports = postorderTraversal;
