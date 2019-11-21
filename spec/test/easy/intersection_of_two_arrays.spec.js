const s1 = require('@easy/intersection_of_two_arrays_1');

describe('intersection of two arrays', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1,2,2,1], [2,2]],
            output: [2]
        }, {
            input: [[4,9,5],[9,4,9,8,4]],
            output: [9,4]
        }]
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});