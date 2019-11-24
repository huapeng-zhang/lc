const s1 = require('@medium/longest_substring_without_repeating_characters_1');

describe('longest substring without repeating characters', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: ['abcabcbb'],
            output: 3
        }, {
            input: ['bbbbb'],
            output: 1
        }, {
            input: ['pwwkew'],
            output: 3
        }, {
            input: ['aab'],
            output: 2
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        })
    });
});
