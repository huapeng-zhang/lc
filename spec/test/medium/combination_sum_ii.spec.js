const s1 = require('@medium/combination_sum_ii_1.js');

describe('combination sum ii', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[10,1,2,7,6,1,5], 8],
            output: [[1, 7], [1, 2, 5], [2, 6], [1, 1, 6]]
        }, {
            input: [[2,5,2,1,2], 5],
            output: [[1,2,2], [5]]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const output = s1.apply(null, c.input);

            expect(output.length).toEqual(c.output.length);
            c.output.forEach(item => expect(output).toContain(item));
        });
    });
});
