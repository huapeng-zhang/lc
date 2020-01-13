const s1 = require('@hard/longest_valid_parentheses_1');

describe('longest valid parentheses', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: ['(()'],
            output: 2
        }, {
            input: [')()())'],
            output: 4
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
