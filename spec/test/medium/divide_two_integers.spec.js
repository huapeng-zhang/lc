const s1 = require('@medium/divide_two_integers_1');

describe('divide tow integers', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [10, 3],
            output: 3
        }, {
            input: [7, -3],
            output: -2
        }, {
            input: [0, 1],
            output: 0
        }, {
            input: [3, 3],
            output: 1
        }, {
            input: [-2147483648, -1],
            output: 2147483647
        }]
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
