const s1 = require('@medium/next_permutation_1');

describe('next permutation', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1, 2, 3]],
            output: [1, 3, 2]
        }, {
            input: [[3, 2, 1]],
            output: [1, 2, 3]
        }, {
            input: [[1, 1, 5]],
            output: [1, 5, 1]
        }, {
            input: [[2, 2, 2]],
            output: [2, 2, 2]
        }, {
            input: [[1, 2, 2]],
            output: [2, 1, 2]
        }, {
            input: [[1, 3, 2]],
            output: [2, 1, 3]
        }, {
            input: [[16,27,25,23,25,16,12,9,1,2,7,20,19,23,16,0,6,22,16,11,8,27,9,2,20,2,13,7,25,29,12,12,18,29,27,13,16,1,22,9,3,21,29,14,7,8,14,5,0,23,16,1,20]],
            output: [16,27,25,23,25,16,12,9,1,2,7,20,19,23,16,0,6,22,16,11,8,27,9,2,20,2,13,7,25,29,12,12,18,29,27,13,16,1,22,9,3,21,29,14,7,8,14,5,0,23,16,20,1]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const input = c.input;
            s1.apply(null, input);

            expect(input[0]).toEqual(c.output);
        })
    });
});
