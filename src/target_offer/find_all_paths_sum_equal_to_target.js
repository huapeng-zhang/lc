
function findAllPathsWrap(root, target) {
    const ret = [];
    if (!root) {
        return ret;
    }

    findAllPaths(root, [], 0, ret, target);
    return ret;
}

function findAllPaths(node, stack, sum, ret, target) {
    sum += node.val;
    if (!node.left && !node.right) {
        if (sum === target) {
            ret.push([...stack, node.val]);
        }
        return;
    }

    stack.push(node.val);
    node.left && findAllPaths(node.left, stack, sum, ret, target);
    node.right && findAllPaths(node.right, stack, sum, ret, target);

    stack.pop();
}

module.exports = findAllPathsWrap;
