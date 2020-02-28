
function firstCommonNode(list1, list2) {
    if (!list1 || !list2) {
        return null;
    }

    let node = list1;
    let len1 = 0;
    while(node) {
        len1++;
        node = node.next;
    }
    node = list2;
    let len2 = 0;
    while(node) {
        len2++;
        node = node.next;
    }

    let delta = len1 - len2;
    while(delta > 0) {
        list1 = list1.next;
        delta--;
    }
    while(delta < 0) {
        list2 = list2.next;
        delta++;
    }

    while (list1 && list2) {
        if (list1 === list2) {
            return list1;
        }
        list1 = list1.next;
        list2 = list2.next;
    }
    return null;
}

module.exports = firstCommonNode;
