const s1 = require('@medium/binary_tree_inorder_traversal_1');
const s2 = require('@medium/binary_tree_inorder_traversal_2');
const { arrayToTree } = require('@utils/binaryTree');

describe('binary tree inorder traversal', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToTree([1,null,2,null,null,3])],
            output: [1,3,2]
        }]
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
    it('solution 1', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toEqual(c.output);
        });
    });
});
