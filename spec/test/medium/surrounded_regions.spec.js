const s1 = require('@medium/surrounded_regions_1');
const s2 = require('@medium/surrounded_regions_2');

describe('surrounded regions', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[
                ['X', 'X', 'X', 'X'],
                ['X', 'O', 'O', 'X'],
                ['X', 'X', 'O', 'X'],
                ['X', 'O', 'X', 'X']
            ]],
            output: [
                ['X', 'X', 'X', 'X'],
                ['X', 'X', 'X', 'X'],
                ['X', 'X', 'X', 'X'],
                ['X', 'O', 'X', 'X']
            ]
        }, {
            input: [[
                ['X', 'X', 'X', 'X'],
                ['X', 'X', 'O', 'X'],
                ['X', 'O', 'O', 'X'],
                ['X', 'O', 'X', 'X']
            ]],
            output: [
                ['X', 'X', 'X', 'X'],
                ['X', 'X', 'O', 'X'],
                ['X', 'O', 'O', 'X'],
                ['X', 'O', 'X', 'X']
            ]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            s1.apply(null, c.input);
            expect(c.input[0]).toEqual(c.output);
        });
    });
    it('solution 2', () => {
        cases.forEach(c => {
            s2.apply(null, c.input);
            expect(c.input[0]).toEqual(c.output);
        });
    });
});
