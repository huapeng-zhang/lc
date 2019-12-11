/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];

    let nodes = [];
    if (root) {
        nodes.push(root);
    }
    while(nodes.length) {
        const newNodes = [];
        const item = [];
        for(let i = 0; i < nodes.length; i++) {
            item.push(nodes[i].val);

            if (nodes[i].left) {
                newNodes.push(nodes[i].left);
            }
            if (nodes[i].right) {
                newNodes.push(nodes[i].right);
            }
        }
        result.push(item);
        nodes = newNodes;
    }

    return result;
};

module.exports = levelOrder;
