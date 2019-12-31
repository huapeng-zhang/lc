const s1 = require('@medium/target_sum_1');

describe('target sum', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1, 1, 1, 1, 1], 3],
            output: 5
        }, {
            input: [[1], 2],
            output: 0
        }, {
            input: [[7,9,3,8,0,2,4,8,3,9], 0],
            output: 0
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
