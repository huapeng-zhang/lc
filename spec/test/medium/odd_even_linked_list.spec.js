const { arrayToLink } = require('@utils/link');
const s1 = require('@medium/odd_even_linked_list_1');

describe('odd even linked list', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToLink([1,2,3,4,5])],
            output: arrayToLink([1,3,5,2,4])
        }, {
            input: [arrayToLink([2,1,3,5,6,4,7])],
            output: arrayToLink([2,3,6,7,1,5,4])
        }, {
            input: [arrayToLink([1])],
            output: arrayToLink([1])
        }]
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
