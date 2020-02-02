const { arrayToLink } = require('@utils/link');
const s1 = require('@target_offer/print_list_reversingly_1');
const s2 = require('@target_offer/print_list_reversingly_2');

describe('print list reversingly', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: []
        }, {
            input: [arrayToLink([5])],
            output: [5]
        }, {
            input: [arrayToLink([1,2,3,4,5])],
            output: [5,4,3,2,1]
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
