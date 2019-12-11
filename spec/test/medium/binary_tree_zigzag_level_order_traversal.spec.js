const s1 = require('@medium/binary_tree_zigzag_level_order_traversal_1');

const { arrayToTree } = require('@utils/binaryTree');

describe('binary tree zigzag level order traversal', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToTree([3,9,20,null,null,15,7])],
            output: [
                [3],
                [20,9],
                [15,7]
            ]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const actual = s1.apply(null, c.input);

            expect(actual.length).toEqual(c.output.length);
            c.output.forEach(item => expect(actual).toContain(item));
        });
    });
});
