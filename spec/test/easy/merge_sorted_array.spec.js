const solution1 = require('@easy/merge_sorted_array_1.js');

describe('merge sorted array', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            description: 'normal use case',
            input: [
                [1, 2, 3, 0, 0, 0],
                3,
                [2, 5, 6],
                3
            ],
            output: [1, 2, 2, 3, 5, 6]
        }, {
            input: [
                [0],
                0,
                [1],
                1
            ],
            output: [1]
        }];
    });

    it('merge sorted array, solution 1', () => {
        expect(solution1.apply(null, cases[0].input)).toEqual(cases[0].output);
        expect(solution1.apply(null, cases[1].input)).toEqual(cases[1].output);
    });
});
