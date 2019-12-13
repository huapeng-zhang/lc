const s1 = require('@medium/path_sum_ii_1');
const s2 = require('@medium/path_sum_ii_2');
const { arrayToTree } = require('@utils/binaryTree');

describe('path sum ii', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToTree([5,4,8,11,null,13,4,7,2,null,null,null,null,5,1]), 22],
            output: [
                [5,4,11,2],
                [5,8,4,5]
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

    it('solution 2', () => {
        cases.forEach(c => {
            const actual = s2.apply(null, c.input);

            expect(actual.length).toEqual(c.output.length);
            c.output.forEach(item => expect(actual).toContain(item));
        });
    });
});
