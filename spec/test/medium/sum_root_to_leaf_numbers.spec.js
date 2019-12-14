const { arrayToTree } = require('@utils/binaryTree');
const s1 = require('@medium/sum_root_to_leaf_numbers_1');
const s2 = require('@medium/sum_root_to_leaf_numbers_2');

describe('sum root to leaf numbers', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToTree([1,2,3])],
            output: 25,
        }, {
            input: [arrayToTree([4,9,0,5,1])],
            output: 1026
        }, {
            input: [arrayToTree([])],
            output: 0
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
    it('solution 2', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toEqual(c.output);
        });
    });
});
