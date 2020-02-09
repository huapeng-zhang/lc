const { arrayToLink } = require('@utils/link');
const s1 = require('@target_offer/reverse_link_1');
const s2 = require('@target_offer/reverse_link_2');

describe('reverse link', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: null
        }, {
            input: [arrayToLink([1])],
            output: arrayToLink([1])
        }, {
            input: [arrayToLink([1,2])],
            output: arrayToLink([2,1])
        }, {
            input: [arrayToLink([1,2,3,4,5])],
            output: arrayToLink([5,4,3,2,1])
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toEqual(c.output);
        });
    });
});
