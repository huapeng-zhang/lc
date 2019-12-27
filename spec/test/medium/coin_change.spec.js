const s1 = require('@medium/coin_change_1');

describe('coin change', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1, 2, 5], 11],
            output: 3
        }, {
            input: [[2], 3],
            output: -1
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
