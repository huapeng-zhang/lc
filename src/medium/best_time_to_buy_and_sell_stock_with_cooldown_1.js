/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || !prices.length || prices.length === 1) {
        return 0;
    }

    const sell = [];
    const buy = [];

    buy[0] = -prices[0];
    sell[0] = 0;
    buy[1] = buy[0] > -prices[1] ? buy[0] : -prices[1];
    sell[1] = buy[0] + prices[1] > sell[0] ? buy[0] + prices[1] : sell[0];
    for (let i = 2; i < prices.length; i++) {
        const newSell = sell[i-1] > (buy[i-1] + prices[i]) ? sell[i-1] : buy[i-1] + prices[i];
        const newBuy = buy[i-1] > sell[i-2] - prices[i] ? buy[i-1] : sell[i-2] - prices[i];

        sell.push(newSell);
        buy.push(newBuy);
    }

    return sell[prices.length-1] > buy[prices.length-1] ? sell[prices.length-1] : buy[prices.length-1];
};

module.exports = maxProfit;
