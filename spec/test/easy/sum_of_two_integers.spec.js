const s1 = require('@easy/sum_of_two_integers_1');

describe('sum of two integers', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [1,2],
            output: 3
        }, {
            input: [1,0],
            output: 1
        }, {
            input: [0,0],
            output: 0
        }, {
            input: [15,20],
            output: 35
        }, {
            input: [2,-3],
            output: -1
        }, {
            input: [-7,-9],
            output: -16
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        })
    });
});
