const { arrayToTree } = require('@utils/binaryTree');
const s1 = require('@hard/binary_tree_maximum_path_sum_1');
const s2 = require('@hard/binary_tree_maximum_path_sum_2');

describe('binary tree maximum path sum', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToTree([-10,9,20,null,null,15,7])],
            output: 42
        }, {
            input: [arrayToTree([-5,-8,-10,null,null,-2,-4,null,null,null,null,-11,-12])],
            output: -2
        }, {
            input: [arrayToTree([1,2,null,3])],
            output: 6
        }, {
            input: [arrayToTree([1,null,2,null,null,null,3])],
            output: 6
        }, {
            input: [arrayToTree([0,1,1])],
            output: 2
        }, {
            input: [arrayToTree([1,2,3])],
            output: 6
        }, {
            input: [arrayToTree([1,-2,-3,1,3,-2,null,-1])],
            output: 3
        }, {
            input: [arrayToTree([5,4,8,11,null,13,4,7,2,null,null,null,null,null,1])],
            output: 48
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output)
        });
    });
    it('solution 2', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toEqual(c.output)
        });
    });
});
