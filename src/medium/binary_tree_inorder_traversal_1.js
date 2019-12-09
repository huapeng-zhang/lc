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
    let stack = [root];
    let result = [];

    if (!root) {
        return [];
    }
    const visited = new Set();
    while(true) {
        if (stack.length === 0) {
            return result;
        }

        let node = stack[stack.length-1];
        while(node.left && !visited.has(node.left)) {
            stack.push(node.left);
            node = node.left;
        }
        node = stack.pop();
        result.push(node.val);
        visited.add(node);

        if (node.right) {
            stack.push(node.right)
        }
    }
};

module.exports = inorderTraversal;
