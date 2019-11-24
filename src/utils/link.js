function arrayToLink(vals) {
    if (!vals || !vals.length) {
        return null;
    }

    let head = null;
    let prev = null;

    vals.forEach(val => {
        const cur = buildNode(val);

        if (prev) {
            prev.next = cur;
        } else {
            head = cur;
        }

        prev = cur;
    });

    return head;
}

function buildNode(val) {
    return {
        val,
        next: null
    }
}

module.exports = {
    arrayToLink
};
