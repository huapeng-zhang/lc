const s1 = require('@medium/word_break_1');

describe('word break', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: ['leetcode', ['leet', 'code']],
            output: true
        }, {
            input: ['applepenapple', ['apple', 'pen']],
            output: true
        }, {
            input: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']],
            output: false
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
