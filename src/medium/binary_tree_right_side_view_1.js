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
var rightSideView = function(root) {
    const ret = [];
    const list = [];
    if (root) {
        list.push(root);
        list.push(null);
    }
    let pos = 0;
    while(pos < list.length) {
        if (list[pos] !== null) {
            !list[pos+1] && ret.push(list[pos].val);
            list[pos].left && list.push(list[pos].left);
            list[pos].right && list.push(list[pos].right);
        } else if (pos === list.length-1) {
            break;
        } else {
            list.push(null);
        }
        pos++;
    }

    return ret;
};

module.exports = rightSideView;
