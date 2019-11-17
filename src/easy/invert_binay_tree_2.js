/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const stack = [root];

    let node;
    while ((node = stack.pop())) {
        const left = node.left;
        const right = node.right;

        if (left) {
            stack.push(left);
        }
        if (right) {
            stack.push(right);
        }

        node.left = right;
        node.right = left;
    }

    return root;
};
