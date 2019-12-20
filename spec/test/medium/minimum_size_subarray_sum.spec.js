const s1 = require('@medium/minimum_size_subarray_sum_1');

describe('minimum size subarray sum', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [7,[2,3,1,2,4,3]],
            output: 2
        }, {
            input: [100,[2,3,1,2,4,3]],
            output: 0
        }, {
            input: [7,[2,3,1,2,4,8]],
            output: 1
        }]
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
});
