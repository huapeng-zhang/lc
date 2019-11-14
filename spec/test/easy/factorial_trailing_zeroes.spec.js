const s1 = require('@easy/factorial_trailing_zeroes_1');

describe('factorial trailing zeroes', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [3],
            output: 0
        }, {
            input: [5],
            output: 1
        }, {
            input: [0],
            output: 0
        }, {
            input: [2147483647],
            output: 536870902
        }];
    });

    it('solution 1', () => {
        expect(s1.apply(null, cases[0].input)).toEqual(cases[0].output);
        expect(s1.apply(null, cases[1].input)).toEqual(cases[1].output);
        expect(s1.apply(null, cases[2].input)).toEqual(cases[2].output);
        expect(s1.apply(null, cases[3].input)).toEqual(cases[3].output);
    })
});
