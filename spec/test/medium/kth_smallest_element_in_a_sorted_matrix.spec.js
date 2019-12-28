const s1 = require('@medium/kth_smallest_element_in_a_sorted_matrix_1');
const s2 = require('@medium/kth_smallest_element_in_a_sorted_matrix_2');

describe('kth smallest element in a sorted matrix', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[
                [ 1,  5,  9],
                [10, 11, 13],
                [12, 13, 15]
            ], 8],
            output: 13
        }, {
            input: [[
                [1 ,4 ,7 ,11,15],
                [2 ,5 ,8 ,12,19],
                [3 ,6 ,9 ,16,22],
                [10,13,14,17,24],
                [18,21,23,26,30]
            ], 20],
            output: 21
        }];
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
