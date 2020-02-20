
function toDoubleLink(node) {
    if (!node) {
        return null;
    }

    let ret = node;
    if (node.left) {
        let pre = null;
        pre = node.left;
        while(pre.right) pre = pre.right;

        ret = toDoubleLink(node.left);
        pre.right = node;
        node.left = pre;
    }

    if (node.right) {
        let next = null;
        next = node.right;
        while(next.left) next = next.left;

        toDoubleLink(node.right);
        next.left = node;
        node.right = next;
    }

    return ret;
}

module.exports = toDoubleLink;
