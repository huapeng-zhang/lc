const { arrayToTree } = require('@utils/binaryTree');
const s1 = require('@target_offer/construct_binary_tree');

describe('construct binary tree', () => {
    let cases = null;
    let cases2 = null;

    beforeEach(() => {
        cases = [{
            input: [[],[]],
            output: null
        }, {
            input: [[1],[1]],
            output: arrayToTree([1])
        }, {
            input: [[3,2,1],[1,2,3]],
            output: arrayToTree([3,2,null,1])
        }, {
            input: [[1,2,3],[1,2,3]],
            output: arrayToTree([1,null,2,null,null,null,3])
        }];

        cases2 = [{
            input: [[1],[2]],
            output: null
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });

        cases2.forEach(c => {
            expect(() => s1.apply(null, c.input)).toThrowError(Error);
        });
    });
});
