const s1 = require('@target_offer/first_nonrepeated_letter');

describe('find first non-repeated letter', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [''],
            output: null
        }, {
            input: ['a'],
            output: 'a'
        }, {
            input: ['aa'],
            output: null
        }, {
            input: ['abaccdeff'],
            output: 'b'
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
});
