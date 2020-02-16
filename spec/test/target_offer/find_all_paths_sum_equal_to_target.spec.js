const { arrayToTree } = require('@utils/binaryTree');
const s1 = require('@target_offer/find_all_paths_sum_equal_to_target');

describe('find all paths that the sum of values equals to target', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null,20],
            output: []
        }, {
            input: [arrayToTree([10,5,12,5,7]),22],
            output: [[10,5,7],[10,12]]
        }, {
            input: [arrayToTree([10,5,12,5,7]),20],
            output: [[10,5,5]]
        }, {
            input: [arrayToTree([10,5,12,5,7]),21],
            output: []
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const output = s1.apply(null, c.input);
            expect(output.length).toEqual(c.output.length);
            c.output.forEach(item => expect(output).toContain(item));
        });
    });
});
