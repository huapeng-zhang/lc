const { arrayToTree } = require('@utils/binaryTree');
const s1 = require('@medium/kth_smallest_element_in_a_bst_1');

describe('kth smallest element in a bst', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToTree([3,1,4,null,2]), 1],
            output: 1
        }, {
            input: [arrayToTree([5,3,6,2,4,null, null,1]), 3],
            output: 3
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
