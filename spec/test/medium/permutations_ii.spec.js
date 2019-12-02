const s1 = require('@medium/permutations_ii_1');

describe('permutations ii', () => {
    cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1, 1, 2]],
            output: [[
                1,1,2
            ], [
                1,2,1
            ], [
                2,1,1
            ]]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const actual = s1.apply(null, c.input);

            expect(actual.length).toEqual(c.output.length);
            c.output.forEach(item => {
                expect(actual).toContain(item);
            });
        })
    })
});
