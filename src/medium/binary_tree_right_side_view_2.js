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
    let list = [];
    if (root) {
        list.push(root);
    }
    while(list.length) {
        const newList = [];
        ret.push(list[list.length-1].val);
        for (let i = 0; i < list.length; i++) {
            list[i].left && newList.push(list[i].left);
            list[i].right && newList.push(list[i].right);
        }
        list = newList;
    }

    return ret;
};

module.exports = rightSideView;
