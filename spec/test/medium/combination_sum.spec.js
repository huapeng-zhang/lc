const s1 = require('@medium/combination_sum_1.js');

describe('combination sum', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[2,3,6,7], 7],
            output: [[7], [2,2,3]]
        }, {
            input: [[2,3,5], 8],
            output: [[2,2,2,2], [2,3,3], [3,5]]
        }]
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const output = s1.apply(null, c.input);

            expect(output.length).toEqual(c.output.length);
            c.output.forEach(item => {
                expect(output).toContain(item);
            });
        });
    });
});
