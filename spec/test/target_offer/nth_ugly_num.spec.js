const s1 = require('@target_offer/nth_ugly_num');

describe('nth ugly numbers', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [1],
            output: 1
        }, {
            input: [4],
            output: 4
        }, {
            input: [11],
            output: 15
        }, {
            input: [150],
            output: 5832
        }, {
            input: [1500],
            output: 859963392
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
