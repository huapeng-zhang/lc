const s1 = require('@medium/group_anagrams_1');

describe('group anagrams', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [["eat", "tea", "tan", "ate", "nat", "bat"]],
            output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const actual = s1.apply(null, c.input);

            expect(actual.length).toBe(c.output.length);
            c.output.forEach(item => expect(actual).toContain(item));
        })
    });
});
