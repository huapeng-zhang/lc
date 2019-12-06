const s1 = require('@medium/set_matrix_zeroes_1.js');

describe('set matrix zeroes', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[
                [1,1,1],
                [1,0,1],
                [1,1,1]
            ]],
            output: [
                [1,0,1],
                [0,0,0],
                [1,0,1]
            ]
        }, {
            input: [[
                [0,1,2,0],
                [3,4,5,2],
                [1,3,1,5]
            ]],
            output: [
                [0,0,0,0],
                [0,4,5,0],
                [0,3,1,0]
            ]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const input = c.input;
            s1.apply(null, input);

            expect(input[0]).toEqual(c.output);
        })
    });
});
