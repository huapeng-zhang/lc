const solution1 = require('@easy/best_time_to_buy_and_sell_stock_ii_1');

describe('best time to buy and sell stock ii', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[7,1,5,3,6,4]],
            output: 7
        }, {
            input: [[1,2,3,4,5]],
            output: 4
        }, {
            input: [[7,6,4,3,1]],
            output: 0
        }]
    });

    it('solution 1', () => {
        expect(solution1.apply(null, cases[0].input)).toEqual(cases[0].output);
        expect(solution1.apply(null, cases[1].input)).toEqual(cases[1].output);
        expect(solution1.apply(null, cases[2].input)).toEqual(cases[2].output);
    });
});