const s1 = require('@medium/4sum_ii_1');

describe('4 sum ii', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [
                [ 1, 2],
                [-2,-1],
                [-1, 2],
                [ 0, 2]
            ],
            output: 2
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
