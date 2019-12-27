/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (!coins || !coins.length) {
        return -1;
    }

    coins.sort((a, b) => b - a);
    const dp = [0];
    for (let i = 1; i <= amount; i++) {
        let min = undefined;
        for (let k = 0; k < coins.length; k++) {
            if (coins[k] > i || dp[i-coins[k]] === undefined) continue;

            if (min === undefined) {
                min = dp[i-coins[k]] + 1;
            } else if (min > dp[i-coins[k]] + 1) {
                min = dp[i-coins[k]] + 1;
            }
        }
        dp.push(min);
    }

    return dp[amount] === undefined ? -1 : dp[amount];
};

module.exports = coinChange;
