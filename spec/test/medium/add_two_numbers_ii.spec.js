const { arrayToLink } = require('@utils/link')
const s1 = require('@medium/add_two_numbers_ii_1');

describe('add tow numbers ii', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToLink([7,2,4,3]),arrayToLink([5,6,4])],
            output: arrayToLink([7,8,0,7])
        }, {
            input: [arrayToLink([0]),arrayToLink([0])],
            output: arrayToLink([0])
        }, {
            input: [
                arrayToLink([2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]),
                arrayToLink([5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9])],
            output: arrayToLink([8,0,7,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,7,2,4,3,8])

        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
