/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const min = m < n ? (m-1) : (n-1);
    let result = 1;
    for (let i = 0; i < min; i++) {
        result = result*(m+n-i-2);
    }
    for (let i = 0; i < min; i++) {
        result = result/(min-i)
    }
    return result;
};

module.exports = uniquePaths;
