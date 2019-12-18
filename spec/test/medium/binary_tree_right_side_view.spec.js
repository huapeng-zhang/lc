const { arrayToTree } = require('@utils/binaryTree');
const s1 = require('@medium/binary_tree_right_side_view_1');
const s2 = require('@medium/binary_tree_right_side_view_2');

describe('binary tree right side view', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToTree([1,2,3,null,5,null,4])],
            output: [1,3,4]
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
