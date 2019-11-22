const { arrayToTree } = require('@utils/binaryTree');
const s1 = require('@easy/path_sum_iii_1');
const s2 = require('@easy/path_sum_iii_2');

describe('path sum', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[10,5,-3,3,2,null,11,3,-2,null,1], 8],
            output: 3
        }, {
            input: [[10,5,-3,3,2,null,11,3,-2,null,1], 3],
            output: 3
        }, {
            input: [[], 0],
            output: 0
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            c.input[0] = arrayToTree(c.input[0]);

            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });

    it('solution 2', () => {
        cases.forEach(c => {
            c.input[0] = arrayToTree(c.input[0]);

            expect(s2.apply(null, c.input)).toEqual(c.output);
        });
    });
});