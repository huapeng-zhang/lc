const s1 = require('@medium/sort_colors_1');

describe('sort colors', () => {
    let cases = [{
        input: [[2,0,2,1,1,0]],
        output: [0,0,1,1,2,2]
    }];

    it('solution 1', () => {
        cases.forEach(c => {
            s1.apply(null, c.input);
            expect(c.input[0]).toEqual(c.output);
        });
    });
});