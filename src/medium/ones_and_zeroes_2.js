/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const zeroCode = '0'.charCodeAt(0);
    for (let i = 0; i < strs.length; i++) {
        let oneCount = 0;
        for (let j = 0; j < strs[i].length; j++) {
            oneCount += strs[i].charCodeAt(j) - zeroCode;
        }
        strs[i] = [strs[i].length-oneCount, oneCount];
    }

    return help(0, strs, m, n, 0, {});
};

function help(startPos, strs, m, n, count, cache) {
    if (startPos >= strs.length) {
        return count;
    }
    const key = `${startPos}-${m}-${n}`;
    if (cache[key]) {
        return count + cache[key];
    }
    const [zeroes, ones] = strs[startPos];

    const count1 = help(startPos+1, strs, m, n, count, cache);
    if (zeroes <= m && ones <= n) {
        const count2 = help(startPos+1, strs, m-zeroes, n-ones, count+1, cache);
        const ret = count1 > count2 ? count1 : count2;
        cache[key] = ret - count;
        return ret;
    } else {
        cache[key] = count1 - count;
        return count1;
    }
}

module.exports = findMaxForm;
