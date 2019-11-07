const solution1 = require('@easy/best_time_to_buy_and_sell_stock_1');

describe('best time to buy and sell stock', () => {
    let cases = [{
        input: [[7,1,5,3,6,4]],
        output: 5
    }, {
        input: [[7,6,4,3,1]],
        output: 0
    }];

    it('solution 1', () => {
        expect(solution1.apply(null, cases[0].input)).toEqual(cases[0].output);
    });
});