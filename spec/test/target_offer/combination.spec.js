const s1 = require('@target_offer/combination');

describe('combination', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [''],
            output: []
        }, {
            input: null,
            output: []
        }, {
            input: [['a']],
            output: ['a']
        }, {
            input: [['a', 'a', 'a']],
            output: ['a', 'aa', 'aaa']
        }, {
            input: [['a', 'b', 'c']],
            output: ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']
        }, {
            input: [['a', 'b', 'c', 'b']],
            output: ['a', 'b', 'c', 'ab', 'ac', 'bb', 'bc', 'abb', 'abc', 'bbc', 'abbc']
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const output = s1.apply(null, c.input);

            expect(output.length).toBe(c.output.length);
            c.output.forEach(item => expect(output).toContain(item));
        });
    });
});
