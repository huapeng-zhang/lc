const s1 = require('@medium/perfect_squares_1');

describe('perfect squares', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [12],
            output: 3,
        }, {
            input: [13],
            output: 2
        }, {
            input: [1],
            output: 1
        }, {
            input: [2],
            output: 2
        }, {
            input: [0],
            output: 0
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
