
function traverseBinaryTree(root) {
    const ret = [];
    const queue = [];
    if (root) {
        queue.push(root);
    }

    while(queue.length) {
        const node = queue.shift();
        ret.push(node.val);

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return ret;
}

module.exports = traverseBinaryTree;
