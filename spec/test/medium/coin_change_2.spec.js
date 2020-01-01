const s1 = require('@medium/coin_change_2_1');
const s2 = require('@medium/coin_change_2_2');

describe('coin change 2', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [5, [1,2,5]],
            output: 4
        }, {
            input: [3, [2]],
            output: 0
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });

    it('solution 2', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toEqual(c.output);
        });
    });
});
