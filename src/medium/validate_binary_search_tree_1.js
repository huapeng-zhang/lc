/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const stack = [];

    if (!root) {
        return true;
    }

    let node = root;
    while(node) {
        stack.push(node);
        node = node.left;
    }

    let lastVal = null;
    while((node = stack.pop())) {
        if (lastVal !== null && lastVal >= node.val) {
            return false;
        }
        lastVal = node.val;

        if (node.right) {
            stack.push(node.right);
            node = node.right.left;

            while(node) {
                stack.push(node);
                node = node.left;
            }
        }
    }
    return true;
};

module.exports = isValidBST;
