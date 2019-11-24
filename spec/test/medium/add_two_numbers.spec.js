const { arrayToLink } = require('@utils/link');
const s1 = require('@medium/add_two_numbers_1');

describe('add tow numbers', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToLink([2, 4, 3]), arrayToLink([5, 6, 4])],
            output: arrayToLink([7, 0, 8])
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
