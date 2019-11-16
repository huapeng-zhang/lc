const s1 = require('@easy/reverse_bits_1');

describe('reverse bits', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[43261596]],
            output: 964176192
        }, {
            input: [[4294967293]],
            output: 3221225471
        }]
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        })
    });
});