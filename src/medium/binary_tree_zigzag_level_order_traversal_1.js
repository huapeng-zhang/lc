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
var zigzagLevelOrder = function(root) {
    const ret = [];

    let list = [];
    if (root) {
        list.push(root);
    }
    let direction = 1;
    while(list.length) {
        const newList = [];
        const item = [];
        for (let i = list.length-1; i >= 0; i--) {
            item.push(list[i].val);
            if (direction > 0) {
                if (list[i].left) {
                    newList.push(list[i].left);
                }
                if (list[i].right) {
                    newList.push(list[i].right);
                }
            } else {
                if (list[i].right) {
                    newList.push(list[i].right);
                }
                if (list[i].left) {
                    newList.push(list[i].left);
                }
            }
        }
        direction = -direction;
        ret.push(item);
        list = newList;
    }

    return ret;
};

module.exports = zigzagLevelOrder;
