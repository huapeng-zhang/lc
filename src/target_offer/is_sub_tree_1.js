/**
 * Check whether root2 is sub tree of root1 from root
 *
 * @param {val, left, right} root1
 * @param {val , left, right} root2
 * @return boolean
 */
function isSubTreeFromRoot(root1, root2) {
    let q1 = [root1];
    let q2 = [root2];

    while(q2.length) {
        const node1 = q1.shift();
        const node2 = q2.shift();

        if (!node1) {
            return false;
        }
        if (node1.val !== node2.val) {
            return false;
        }

        if (node2.left) {
            if (!node1.left) {
                return false;
            }
            q1.push(node1.left);
            q2.push(node2.left);
        }
        if (node2.right) {
            if (!node2.right) {
                return false;
            }
            q1.push(node1.right);
            q2.push(node2.right);
        }
    }
    return true;
}

function isSubTree(tree, subTree) {
    if (!tree && !subTree) {
        return true;
    }
    if (!subTree) {
        return true;
    }
    if (!tree) {
        return false;
    }

    const q =[tree];
    while(q.length) {
        const node = q.shift();
        if (isSubTreeFromRoot(node, subTree)) {
            return true;
        }
        node.left && q.push(node.left);
        node.right && q.push(node.right);
    }
    return false;
}

module.exports = isSubTree;
