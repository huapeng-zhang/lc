
function mergeSortLinks(node1, node2) {
    const head = {next: null};
    let prev = head;

    while(node1 && node2) {
        if (node1.val <= node2.val) {
            prev.next = node1;
            node1 = node1.next;
        } else {
            prev.next = node2;
            node2 = node2.next;
        }
        prev = prev.next;
    }

    if (node1) {
        prev.next = node1;
    }
    if (node2) {
        prev.next = node2;
    }
    return head.next;
}

module.exports = mergeSortLinks;
