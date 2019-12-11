const s1 = require('@medium/validate_binary_search_tree_1');
const s2 = require('@medium/validate_binary_search_tree_2');
const { arrayToTree } = require('@utils/binaryTree');

describe('validate binary search tree', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToTree([2,1,3])],
            output: true
        }, {
            input: [arrayToTree([5,1,4,null,null,3,6])],
            output: false
        }, {
            input: [arrayToTree([0,null,-1])],
            output: false
        }, {
            input: [arrayToTree([10,5,15,null,null,6,20])],
            output: false
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
