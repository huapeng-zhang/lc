const s1 = require('@target_offer/num_of_one');

describe('num of one in binary radix', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: 0
        }, {
            input: [1],
            output: 1
        }, {
            input: [5],
            output: 2
        }, {
            input: [-5],
            output: 31
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
