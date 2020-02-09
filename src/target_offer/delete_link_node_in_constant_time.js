
function deleteNode(root, node) {
    if (!root) {
        return null;
    }

    if (node.next) {
        node.val = node.next.val;
        node.next = node.next.next;
        return root;
    }

    const head = {next: root};
    let prev = head;
    while(prev.next !== node) prev = prev.next;
    prev.next = prev.next.next;

    return head.next;
}

module.exports = deleteNode;
