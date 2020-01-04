const s1 = require('@medium/super_egg_drop_1');

describe('super egg drop', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [1, 2],
            output: 2
        }, {
            input: [2, 6],
            output: 3
        }, {
            input: [3, 14],
            output: 4
        }, {
            input: [2, 2],
            output: 2
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
