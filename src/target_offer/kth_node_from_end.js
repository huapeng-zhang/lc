
function kthNodeFromEnd(root, k) {
    if (!root || k <= 0) {
        return null
    }

    let rangeStart = root;
    let rangeEnd = root;
    for (let i = 0; i < k; i++) {
        if (!rangeEnd) {
            return null;
        }

        rangeEnd = rangeEnd.next;
    }

    while (rangeEnd) {
        rangeStart = rangeStart.next;
        rangeEnd = rangeEnd.next;
    }

    return rangeStart;
}

module.exports = kthNodeFromEnd;
