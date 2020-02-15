const { arrayToTree } = require('@utils/binaryTree');
const s1 = require('@target_offer/traverse_binary_tree_from_top_to_bottom');

describe('traverse binary tree from top to bottom', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: []
        }, {
            input: [arrayToTree([8])],
            output: [8]
        }, {
            input: [arrayToTree([8,6,null,5])],
            output: [8,6,5]
        }, {
            input: [arrayToTree([8,null,10,null,null,null,11])],
            output: [8,10,11]
        }, {
            input: [arrayToTree([8,6,10,5,7,9,11])],
            output: [8,6,10,5,7,9,11]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
});
