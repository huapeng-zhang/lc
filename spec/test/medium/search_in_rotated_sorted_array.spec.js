const s1 = require('@medium/search_in_rotated_sorted_array_1');

describe('search in rotated sorted array', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[4,5,6,7,0,1,2], 0],
            output: 4
        }, {
            input: [[4,5,6,7,0,1,2], 3],
            output: -1
        }, {
            input: [[4,5,6,7,8,1,2,3], 8],
            output: 4
        }, {
            input: [[5,1,3], 3],
            output: 2
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
