const { arrayToTree } = require('@utils/binaryTree');
const s1 = require('@target_offer/is_sub_tree_1');
const s2 = require('@target_offer/is_sub_tree_2');

describe('is sub tree', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null, null],
            output: true
        }, {
            input: [arrayToTree(['A','B','C']), null],
            output: true
        }, {
            input: [null, arrayToTree(['A','B','C'])],
            output: false
        }, {
            input: [arrayToTree(['A','B','C','D','E',null,null,null,null,'F','G']), arrayToTree(['B','D','E'])],
            output: true
        }, {
            input: [arrayToTree(['B','B','C','D','E',null,null,null,null,'F','G']), arrayToTree(['B','D','E'])],
            output: true
        }, {
            input: [arrayToTree(['A','B','C','D','E',null,null,null,null,'F','B']), arrayToTree(['C','D','E'])],
            output: false
        }, {
            input: [arrayToTree(['A','B',null,'C']), arrayToTree(['A','B'])],
            output: true
        }, {
            input: [arrayToTree(['A','B',null,'C']), arrayToTree(['A',null,'B'])],
            output: false
        }, {
            input: [arrayToTree(['A','B',null,'C']), arrayToTree(['B','C'])],
            output: true
        }, {
            input: [arrayToTree(['A','B',null,'C']), arrayToTree(['B',null,'C'])],
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
