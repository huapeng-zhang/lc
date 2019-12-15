const s1 = require('@medium/palindrome_partitioning_1');

describe('palindrome partitioning', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: ['aab'],
            output: [
                ['aa', 'b'],
                ['a', 'a', 'b']
            ]
        }, {
            input: [''],
            output: [[]]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const actual = s1.apply(null, c.input);

            expect(c.output.length).toEqual(actual.length);
            c.output.forEach(item => expect(actual).toContain(item));
        });
    });
});
