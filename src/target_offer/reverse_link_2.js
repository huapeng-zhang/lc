
function reverseLink(node, prev) {
    if (!node) {
        return prev;
    }
    const next = node.next;
    node.next = prev;
    return reverseLink(next, node);
}

module.exports = function (root) {
    return reverseLink(root, null);
};
