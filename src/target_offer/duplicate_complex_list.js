
function dupList(root) {
    if (!root) {
        return null;
    }

    // first copy the node and append to original
    let node = root;
    while (node) {
        const dup = {
            val: node.val,
            next: node.next,
            sibling: null
        };
        node.next = dup;
        node = dup.next;
    }

    // next, copy the sibling val
    node = root;
    while(node) {
        const dup = node.next;
        if (node.sibling) {
            dup.sibling = node.sibling.next;
        }
        node = dup.next;
    }

    // third split the original list & the duplicate list
    const head = {next: null};
    let prev = head;
    node = root;
    while(node) {
        const dup = node.next;
        prev.next = dup;
        node.next = dup.next;
        prev = dup;
        node = dup.next;
    }
    return head.next;
}

module.exports = dupList;
