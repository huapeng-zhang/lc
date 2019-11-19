const s1 = require('@easy/power_of_four_1');

describe('power of four', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [16],
            output: true
        }, {
            input: [5],
            output: false
        }, {
            input: [0],
            output: false
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        })
    });
});