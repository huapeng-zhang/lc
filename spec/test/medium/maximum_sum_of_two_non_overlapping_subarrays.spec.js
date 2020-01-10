const s1 = require('@medium/maximum_sum_of_two_non_overlapping_subarrays_1');

describe('maximum sum of two non overlapping subarray', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[0,6,5,2,2,5,1,9,4],1,2],
            output: 20
        }, {
            input: [[3,8,1,3,2,1,8,9,0],3,2],
            output: 29
        }, {
            input: [[2,1,5,6,0,9,5,0,3,8],4,3],
            output: 31
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
