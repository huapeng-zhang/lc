
function reverseLink(head) {
    const retHead = {
        next: null
    };

    let node = head;
    while(node) {
        const next = node.next;
        node.next = retHead.next;
        retHead.next = node;
        node = next;
    }

    return retHead.next;
}

module.exports = reverseLink;
