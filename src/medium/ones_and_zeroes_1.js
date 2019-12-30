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

    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp.push(new Array(n+1).fill(0));
    }
    for (let k = 0; k < strs.length; k++) {
        const [zeros, ones] = strs[k];
        for (let i = m; i >=zeros; i--) {
            for (let j = n; j >= ones; j--) {
                dp[i][j] = dp[i][j] > dp[i-zeros][j-ones] + 1 ? dp[i][j] : dp[i-zeros][j-ones] + 1;
            }
        }
    }

    return dp[m][n];
};

module.exports = findMaxForm;
