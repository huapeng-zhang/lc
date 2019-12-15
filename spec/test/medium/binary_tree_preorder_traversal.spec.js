const { arrayToTree } = require('@utils/binaryTree');
const s1 = require('@medium/binary_tree_preorder_traversal_1');
const s2 = require('@medium/binary_tree_preorder_traversal_2');

describe('binary tree preorder traversal', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToTree([1, null, 2, null, null, 3])],
            output: [1, 2, 3]
        }, {
            input: [],
            output: []
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
    it('solution 2', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
