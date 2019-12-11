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
    return help(root, []);
};

function help(root, preEle) {
    if (!root) {
        return true;
    }

    if(!help(root.left, preEle)) {
        return false;
    }

    if (preEle.length > 0 && preEle[0] >= root.val) {
        return false;
    }
    preEle[0] = root.val;
    return help(root.right, preEle);
}

module.exports = isValidBST;
