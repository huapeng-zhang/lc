/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const stack = [];
    const visitedStack = [];

    let ppath = null;
    let qpath = null;

    let node = root;
    while (node) {
        stack.push(node);
        node === p && (ppath = [...stack]);
        node === q && (qpath = [...stack]);
        node = node.left;
    }

    while (stack.length) {
        if (ppath && qpath) {
            break;
        }

        node = stack.pop();
        if (visitedStack.length && visitedStack[visitedStack.length-1] === node) {
            visitedStack.pop();
            continue;
        } else if (node.right) {
            stack.push(node);
            visitedStack.push(node);
            node = node.right;

            while(node) {
                stack.push(node);
                node === p && (ppath = [...stack]);
                node === q && (qpath = [...stack]);
                node = node.left;
            }
        }
    }

    const endPos = ppath.length < qpath.length ? ppath.length : qpath.length;
    for (let i = endPos-1; i >= 0; i--) {
        if (ppath[i] === qpath[i]) {
            return ppath[i];
        }
    }
};

module.exports = lowestCommonAncestor;
