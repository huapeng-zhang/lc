const s1 = require('@medium/reverse_linked_list_ii_1');
const { arrayToLink } = require('@utils/link');

describe('reverse linked list ii', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToLink([1,2,3,4,5]), 2, 4],
            output: arrayToLink([1,4,3,2,5])
        }, {
            input: [arrayToLink([1,2,3]), 1, 3],
            output: arrayToLink([3,2,1])
        }, {
            input: [arrayToLink([]), 0, 0],
            output: arrayToLink([])
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
