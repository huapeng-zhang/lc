const s1 = require('@medium/kth_largest_element_in_an_array_1');
const s2 = require('@medium/kth_largest_element_in_an_array_2');

describe('kth largest element in an array', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[3,2,1,5,6,4], 2],
            output: 5
        }, {
            input: [[3,2,3,1,2,4,5,5,6], 4],
            output: 4
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
