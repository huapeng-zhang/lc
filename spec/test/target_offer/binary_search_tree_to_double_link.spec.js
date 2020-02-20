const { arrayToTree } = require('@utils/binaryTree');
const { arrayToDoubleLink } = require('@utils/doubleLink');

const s1 = require('@target_offer/binary_search_tree_to_double_link_1');
const s2 = require('@target_offer/binary_search_tree_to_double_link_2');

describe('binary search tree to double link', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: null
        }, {
            input: [arrayToTree([10,5,15,3,7,13,17])],
            output: arrayToDoubleLink([3,5,7,10,13,15,17], 'val', 'left', 'right')
        }, {
            input: [arrayToTree([10,5,null,3])],
            output: arrayToDoubleLink([3,5,10], 'val', 'left', 'right')
        }, {
            input: [arrayToTree([10,null,15, null, null, null, 17])],
            output: arrayToDoubleLink([10,15,17], 'val', 'left', 'right')
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