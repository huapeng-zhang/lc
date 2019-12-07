const s1 = require('@medium/subsets_ii_1');

describe('subsets ii', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1,2,2]],
            output: [
                [2],
                [1],
                [1,2,2],
                [2,2],
                [1,2],
                []]
        }, {
            input: [[]],
            output: [[]]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const actual = s1.apply(null, c.input);

            expect(actual.length).toBe(c.output.length);
            c.output.forEach(item => {
                expect(actual).toContain(item);
            });
        });
    })
});
