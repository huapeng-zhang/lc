const { arrayToTree, find } = require('@utils/binaryTree');
const s1 = require('@medium/lowest_common_ancestor_of_a_binary_tree_1');
const s2 = require('@medium/lowest_common_ancestor_of_a_binary_tree_2');

describe('lowest common ancestor of a binary tree', () => {
    let cases = null;

    beforeEach(() => {
        const tree = arrayToTree([3,5,1,6,2,0,8,null,null,7,4]);

        cases = [{
            input: [tree, find(tree, 5), find(tree, 1)],
            output: find(tree, 3)
        }, {
            input: [tree, find(tree, 5), find(tree, 4)],
            output: find(tree, 5)
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toBe(c.output);
        });
    });
    it('solution 2', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toBe(c.output);
        });
    });
});
