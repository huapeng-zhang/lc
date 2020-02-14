const s1 = require('@target_offer/print_matrix_clockwise');

describe('print matrix clockwise', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: []
        }, {
            input: [[[]]],
            output: []
        }, {
            input: [[[1]]],
            output: [1]
        }, {
            input: [[[1,2,3]]],
            output: [1,2,3]
        }, {
            input: [[[1],[2],[3]]],
            output: [1,2,3]
        }, {
            input: [[[1,2,3],[4,5,6]]],
            output: [1,2,3,6,5,4]
        }, {
            input: [[[1,2],[3,4],[5,6]]],
            output: [1,2,4,6,5,3]
        }, {
            input: [[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]],
            output: [1,2,3,4,5,10,15,14,13,12,11,6,7,8,9]
        }, {
            input: [[[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]]],
            output: [1,2,3,6,9,12,15,14,13,10,7,4,5,8,11]
        }, {
            input: [[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]],
            output: [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
        }]
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
