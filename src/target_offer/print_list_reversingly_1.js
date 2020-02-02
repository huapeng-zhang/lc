/**
 * return the reverse order of the list
 * @param {object} head
 * @return {number[]} list
 */
function printListReversingly(head) {
    const ret = [];

    if (!head) {
        return ret;
    }

    while (head) {
        ret.push(head.val);
        head = head.next;
    }

    let i = 0;
    let j = ret.length-1;
    let temp;
    while (i < j) {
        temp = ret[i];
        ret[i] = ret[j];
        ret[j] = temp;
        i++;
        j--;
    }
    return ret;
}

module.exports = printListReversingly;
