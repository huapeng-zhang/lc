/**
 * Construct Binary Tree
 * @param {number[]} preOrders
 * @param {number[]} midOrders
 *
 * @return {{val: *, left: *, right: *}} root of the tree
 */
function constructBinaryTree(preOrders, midOrders) {
    if (!preOrders || !midOrders || !preOrders.length || !midOrders.length) {
        return null;
    }

    if (preOrders.length != midOrders.length) {
        throw Error('Pre orders length not equal to mid order length');
    }

    return help(preOrders, 0, preOrders.length-1, midOrders, 0, midOrders.length-1);
}

/**
 *
 * @param {number[]} preOrders
 * @param {number} preStartPos
 * @param {number} preEndPos
 * @param {number[]} midOrders
 * @param {number} midStartPos
 * @param {number} midEndPos
 * @return {{val: *, left: *, right: *}}
 */
function help(preOrders, preStartPos, preEndPos, midOrders, midStartPos, midEndPos) {
    const val = preOrders[preStartPos];

    let leftCount = 0;
    for (let i = midStartPos; i <= midEndPos; i++) {
        if (midOrders[i] === val) {
            break;
        }
        leftCount++;
    }
    if (leftCount === midEndPos-midStartPos+1) {
        throw Error('Cannot find element in mid orders');
    }

    let left = null;
    let right = null;

    leftCount &&
    (left = help(preOrders, preStartPos+1, preStartPos+leftCount, midOrders, midStartPos, midStartPos+leftCount-1));
    preStartPos+leftCount+1 <= preEndPos &&
    (right = help(preOrders, preStartPos+leftCount+1, preEndPos, midOrders, midStartPos+leftCount+1, midEndPos));

    return {val, left, right};
}

module.exports = constructBinaryTree;
