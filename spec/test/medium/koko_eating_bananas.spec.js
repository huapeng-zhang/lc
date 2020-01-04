const s1 = require('@medium/koko_eating_bananas_1');

describe('koko eating bananas', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[3,6,7,11], 8],
            output: 4
        }, {
            input: [[30,11,23,4,20], 5],
            output: 30
        }, {
            input: [[30,11,23,4,20], 6],
            output: 23
        }]
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
