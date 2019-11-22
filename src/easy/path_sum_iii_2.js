/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    return help(root, 0, sum, {});
};

function help(node, acc, target, vals) {
    if (!node) {
        return 0;
    }

    acc += node.val;
    let count = 0;

    if (acc === target) {
        count++;
    }
    if (vals[acc - target] !== (void 0)) {
        count += vals[acc - target];
    }

    if (vals[acc] === (void 0)) {
        vals[acc] = 1;
    } else {
        vals[acc] += 1;
    }

    count += help(node.left, acc, target, vals);
    count += help(node.right, acc, target, vals);

    vals[acc] -= 1;

    return count;
}

module.exports = pathSum;
