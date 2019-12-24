/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = [0];

    for (let i = 1; i <= n; i++) {
        let min = dp[i-1]+1;
        for (let j = 1; j < i; j++) {
            const diff = j*j;
            if (diff > i) {
                break;
            }

            if (min > dp[i-diff] + 1) {
                min = dp[i-diff] + 1;
            }
        }
        dp.push(min);
    }

    return dp[n];
};

module.exports = numSquares;
