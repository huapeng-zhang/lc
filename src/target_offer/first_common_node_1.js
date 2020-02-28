
function findFirstCommonNode(list1, list2) {
    if (!list1 || !list2) {
        return null;
    }

    const stack1 = [];
    const stack2 = [];

    while(list1) {
        stack1.push(list1);
        list1 = list1.next;
    }
    while(list2) {
        stack2.push(list2);
        list2 = list2.next;
    }

    let preCommonNode = null;
    while (stack1.length && stack2.length) {
        const top1 = stack1.pop();
        const top2 = stack2.pop();

        if (top1 === top2) {
            preCommonNode = top1;
        } else {
            return preCommonNode;
        }
    }
    return preCommonNode;
}

module.exports = findFirstCommonNode;
