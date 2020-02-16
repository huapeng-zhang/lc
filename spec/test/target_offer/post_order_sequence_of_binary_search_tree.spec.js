const s1 = require('@target_offer/post_order_sequence_of_binary_search_tree');

describe('post order sequence of binary search tree', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: true
        }, {
            input: [[]],
            output: true
        }, {
            input: [[1]],
            output: true
        }, {
            input: [[5,7,6,9,11,10,8]],
            output: true
        }, {
            input: [[7,4,6,5]],
            output: false
        }, {
            input: [[5,4,3]],
            output: true
        }, {
            input: [[5,6,7]],
            output: true
        }];
    });

    it('post order sequence of binary search tree', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
