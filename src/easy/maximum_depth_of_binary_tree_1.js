var maxDepth = function(root) {
    return _maxDepth(root);
};

function _maxDepth(node) {
    if (node === null) {
        return 0;
    }

    if (!node.left && !node.right) {
        return 1;
    }

    const lmax = _maxDepth(node.left);
    const rmax = _maxDepth(node.right);

    return lmax > rmax ? (lmax+1) : (rmax+1);
}

module.exports = maxDepth;