const { arrayToLink } = require('@utils/link');
const s1 = require('@hard/merge_k_sorted_lists_1');

describe('merge k sorted list', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[
                arrayToLink([1,4,5]),
                arrayToLink([1,3,4]),
                arrayToLink([2,6])
            ]],
            output: arrayToLink([1,1,2,3,4,4,5,6])
        }, {
            input: [[]],
            output: null
        }, {
            input: [[
                arrayToLink([]),
                arrayToLink([])
            ]],
            output: null
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});