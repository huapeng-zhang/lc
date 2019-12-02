const s1 = require('@medium/permutations_1');

describe('permutations', () => {
    cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1, 2, 3]],
            output: [[
                1,2,3
            ], [
                1,3,2
            ], [
                2,1,3
            ], [
                2,3,1
            ], [
                3,1,2
            ], [
                3,2,1
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
