/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const margin = prices[i] - minPrice;
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        }

        if (margin > max) {
            max = margin;
        }
    }

    return max;
};

module.exports = maxProfit;