const s1 = require('@medium/best_time_to_buy_and_sell_stock_with_cooldown_1');

describe('best time to buy and sell stock with cooldown', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1,2,3,0,2]],
            output: 3
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
