const { arrayToLink } = require('@utils/link');
const s1 = require('@target_offer/merge_two_sort_links');

describe('merge tow sorted link lists', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null, null],
            output: null
        }, {
            input: [arrayToLink([1,2,3]), null],
            output: arrayToLink([1,2,3])
        }, {
            input: [arrayToLink([1,3,5]), arrayToLink([2,4,6])],
            output: arrayToLink([1,2,3,4,5,6])
        }, {
            input: [arrayToLink([1]), arrayToLink([1])],
            output: arrayToLink([1,1])
        }, {
            input: [arrayToLink([1,2,3]), arrayToLink([4,5,6])],
            output: arrayToLink([1,2,3,4,5,6])
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
