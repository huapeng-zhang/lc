const s1 = require('@medium/longest_arithmetic_subsequence_of_given_difference_1');

describe('longest arithmetic subsequence of given difference', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1,2,3,4],1],
            output: 4
        }, {
            input: [[1,3,5,7],1],
            output: 1
        }, {
            input: [[1,5,7,8,5,3,4,2,1],-2],
            output: 4
        }, {
            input: [[3,0,-3,4,-4,7,6],3],
            output: 2
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});