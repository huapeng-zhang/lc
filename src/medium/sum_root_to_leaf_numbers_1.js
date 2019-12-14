/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    const ret = [];
    backTrace(root, [], ret);
    let sum = 0;
    for (let i = 0; i < ret.length; i++) {
        sum += ret[i];
    }
    return sum;
};

function backTrace(node, list, ret) {
    if (!node || !node.left && !node.right) {
        node && list.push(node.val);
        let sum = 0;
        for (let i = 0; i < list.length; i++) {
            sum += list[list.length-1-i]*Math.pow(10, i);
        }
        node && list.pop();
        ret.push(sum);
        return;
    }

    list.push(node.val);
    node.left && backTrace(node.left, list, ret);
    node.right && backTrace(node.right, list, ret);
    list.pop();
}

module.exports = sumNumbers;
