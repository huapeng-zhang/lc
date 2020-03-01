const { arrayToTree } = require('@utils/binaryTree');
const s1 = require('@hard/binary_tree_postorder_traversal_1');
const s2 = require('@hard/binary_tree_postorder_traversal_2');

describe('binary tree post order traversal', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: []
        }, {
            input: [arrayToTree([1])],
            output: [1]
        }, {
            input: [arrayToTree([1,2,null,3])],
            output: [3,2,1]
        }, {
            input: [arrayToTree([1,null,2,null,null,null,3])],
            output: [3,2,1]
        }, {
            input: [arrayToTree([1,2,3,4,5])],
            output: [4,5,2,3,1]
        }, {
            input: [arrayToTree([1,null,2,null,null,3])],
            output: [3,2,1]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
    it('solution 2', () => {
        cases.forEach(c => expect(s2.apply(null, c.input)).toEqual(c.output));
    });
});
