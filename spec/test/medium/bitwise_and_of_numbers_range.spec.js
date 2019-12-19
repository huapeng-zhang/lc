const s1 = require('@medium/bitwise_and_of_numbers_range_1');

describe('bitwise and of numbers range', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [5,7],
            output: 4
        }, {
            input: [0,1],
            output: 0
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
});
