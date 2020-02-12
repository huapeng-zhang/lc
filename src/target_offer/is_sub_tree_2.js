/**
 * Check whether root2 is sub tree of root1 from root
 *
 * @param {val, left, right} root1
 * @param {val , left, right} root2
 * @return boolean
 */
function isSubTreeFromRoot(root1, root2) {
    if (!root2) {
        return true;
    }
    if (!root1) {
        return false;
    }

    if (root1.val !== root2.val) {
        return false;
    }

    let ret = true;
    ret = ret && (!root2.left || isSubTreeFromRoot(root1.left, root2.left));
    ret = ret && (!root2.right || isSubTreeFromRoot(root1.right, root2.right));
    return ret;
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
