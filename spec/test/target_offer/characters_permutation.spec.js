const s1 = require('@target_offer/characters_permutation');

describe('characters permutation', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: []
        }, {
            input: [[]],
            output: []
        }, {
            input: [['a']],
            output: ['a']
        }, {
            input: [['a','a']],
            output: ['aa']
        }, {
            input: [['a', 'b', 'c']],
            output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'],
        }, {
            input: [['a', 'a', 'b']],
            output: ['aab', 'aba', 'baa']
        }, {
            input: [['a', 'a', 'b', 'c']],
            output: ['aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa']
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const ret = s1.apply(null, c.input);
            expect(ret.length).toBe(c.output.length);
            c.output.forEach(item => expect(ret).toContain(item));
        });
    });
});
