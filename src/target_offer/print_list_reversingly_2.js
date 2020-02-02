/**
 * return the reverse order of the list
 * @param {object} head
 * @return {number[]} list
 */
function printListReversingly(head) {
    const ret = [];
    help(head, ret);
    return ret;
}

function help(head, ret) {
    if (!head) {
        return;
    }

    head.next && help(head.next, ret);
    ret.push(head.val);
}

module.exports = printListReversingly;
