/**
 * Convert value array to double link
 * @param {*[]} vals
 * @param {string} prevKey
 * @param {string} nextKey
 *
 * @return double link
 */
function arrayToDoubleLink (vals, valKey = 'val', prevKey = 'prev', nextKey = 'next') {
    if (!vals || !vals.length) {
        return null;
    }

    const head = {[nextKey]: null};
    let prev = head;
    for (let i = 0; i < vals.length; i++) {
        const node = {
            [valKey]: vals[i],
            [prevKey]: prev,
            [nextKey]: null
        };

        prev[nextKey] = node;
        prev = node;
    }

    if (head[nextKey]) {
        head[nextKey][prevKey] = null;
    }
    return head[nextKey];
}

module.exports = {
    arrayToDoubleLink
};
