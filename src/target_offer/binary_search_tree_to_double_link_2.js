
function toDoubleLink(node) {
    const stack = [];
    while (node) {
        stack.push(node);
        node = node.left;
    }

    const head = {right: null};
    let prev = head;
    while (stack.length) {
        node = stack.pop();
        node.left = prev;
        prev.right = node;

        prev = node;
        if (node.right) {
            let child = node.right;
            while (child) {
                stack.push(child);
                child = child.left;
            }
        }
    }

    if (head.right) {
        head.right.left = null;
    }
    return head.right;
}

module.exports = toDoubleLink;
