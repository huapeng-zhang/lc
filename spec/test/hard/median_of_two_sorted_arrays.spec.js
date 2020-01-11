const s1 = require("@hard/median_of_two_sorted_arrays_1");

describe('median of two sorted arrays', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1, 3],[2]],
            output: 2
        }, {
            input: [[1, 2],[3, 4]],
            output: 2.5
        }, {
            input: [[0,0],[0,0]],
            output: 0
        }, {
            input: [[1],[2,3,4,5,6]],
            output: 3.5
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});