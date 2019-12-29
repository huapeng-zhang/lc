const s1 = require('@medium/partition_equal_subset_sum_1');

describe('partition equal subset sum', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1,5,11,5]],
            output: true
        }, {
            input: [[1,2,3,5]],
            output: false
        }, {
            input: [[1,2,5]],
            output: false
        }, {
            input: [[3,3,3,4,5]],
            output: true
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
