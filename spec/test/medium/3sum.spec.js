const s1 = require('@medium/3sum_1');

describe('three sum', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[-1, 0, 1, 2, -1, -4]],
            output: [[-1, 0, 1], [-1, -1, 2]]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const result = s1.apply(null, c.input);

            expect(result.length).toBe(c.output.length);
            c.output.forEach(out => {
                expect(result).toContain(out);
            });
        });
    });
});
