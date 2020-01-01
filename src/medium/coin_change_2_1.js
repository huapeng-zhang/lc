/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = {};
    dp[0] = 1;

    for (let i = 0; i < coins.length; i++) {
        for (let j = amount; j >= coins[i]; j--) {
            let count = 0;
            let coin = coins[i];
            while (coin <= j) {
                if (dp[j-coin]) {
                    count += dp[j-coin];
                }
                coin += coins[i];
            }
            count += dp[j] || 0;
            if (count) {
                dp[j] = count;
            }
        }
    }

    return dp[amount] || 0;
};

module.exports = change;
