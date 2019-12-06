const s1 = require('@medium/subsets_1');
const s2 = require('@medium/subsets_2');

describe('subsets', () => {
    let cases = [{
        input: [[1, 2, 3]],
        output: [
            [3],
            [1],
            [2],
            [1,2,3],
            [1,3],
            [2,3],
            [1,2],
            []
        ]
    }, {
        input: [[]],
        output: [[]]
    }];

    it('solution 1', () => {
        cases.forEach(c => {
            const actual = s1.apply(null, c.input);

            expect(actual.length).toBe(c.output.length);
            c.output.forEach(item => {
                expect(actual).toContain(item);
            });
        });
    });
    it('solution 2', () => {
        cases.forEach(c => {
            const actual = s2.apply(null, c.input);

            expect(actual.length).toBe(c.output.length);
            c.output.forEach(item => {
                expect(actual).toContain(item);
            });
        });
    });
});
