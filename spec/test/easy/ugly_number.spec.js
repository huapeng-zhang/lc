const s1 = require('@easy/ugly_number_1');

describe('ugly number', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [6],
            output: true
        }, {
            input: [8],
            output: true
        }, {
            input: [14],
            output: false
        }, {
            input: [1],
            output: true
        }, {
            input: [0],
            output: false
        }]
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        })
    });
});
