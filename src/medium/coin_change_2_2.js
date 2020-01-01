/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if (amount === 0) {
        return 1;
    }

    const dp = {};
    dp[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            let count = dp[j] || 0;
            if (dp[j-coins[i]]) {
                dp[j] = count + dp[j-coins[i]];
            }
        }
    }

    return dp[amount] || 0;
};

module.exports = change;
