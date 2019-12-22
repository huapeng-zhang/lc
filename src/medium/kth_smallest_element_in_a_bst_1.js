/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const stack = [];

    let node = root;
    let count = 0;
    while(node) {
        stack.push(node);
        node = node.left;
    }

    while(stack.length) {
        node = stack.pop();
        count++;

        if (count === k) {
            return node.val;
        }

        node = node.right;
        while(node) {
            stack.push(node);
            node = node.left;
        }
    }
};

module.exports = kthSmallest;
