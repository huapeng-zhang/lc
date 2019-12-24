const s1 = require('@medium/search_a_2d_matrix_ii_1');
const s2 = require('@medium/search_a_2d_matrix_ii_2');

describe('search a 2d matrix ii', () => {
    let cases = null;

    beforeEach(() => {
        const matrix = [
            [1,   4,  7, 11, 15],
            [2,   5,  8, 12, 19],
            [3,   6,  9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30]
        ];

        cases = [{
            input: [matrix, 5],
            output: true,
        }, {
            input: [matrix, 20],
            output: false
        }, {
            input: [[], 0],
            output: false
        }, {
            input: [[[]], 1],
            output: false
        }, {
            input: [[
                [1,2,3,4,5],
                [6,7,8,9,10],
                [11,12,13,14,15],
                [16,17,18,19,20],
                [21,22,23,24,25]
            ], 5],
            output: true
        }]
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
    it('solution 2', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toEqual(c.output);
        });
    });
});
