/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;

    for (let i = 1; i < prices.length; i++) {
        const margin = prices[i] - prices[i-1];
        if (margin > 0) {
            sum += margin;
        }
    }

    return sum;
};

module.exports = maxProfit;