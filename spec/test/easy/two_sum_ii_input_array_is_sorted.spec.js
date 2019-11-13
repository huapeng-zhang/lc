const s1 = require('@easy/two_sum_ii_input_array_is_sorted_1');
const s2 = require('@easy/two_sum_ii_input_array_is_sorted_2');

describe('tow sum ii input array is sorted', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[2,7,11,15], 9],
            output: [1, 2]
        }, {
            input: [[-1,0], -1],
            output: [1, 2]
        }, {
            input: [[2, 3, 4], 6],
            output: [1, 3]
        }, {
            input: [[0, 0, 3, 4], 0],
            output: [1, 2]
        }]
    });

    it('solution 1', () => {
        expect(s1.apply(null, cases[0].input)).toEqual(cases[0].output);
        expect(s1.apply(null, cases[1].input)).toEqual(cases[1].output);
        expect(s1.apply(null, cases[2].input)).toEqual(cases[2].output);
        expect(s1.apply(null, cases[3].input)).toEqual(cases[3].output);
    });

    it('solution 2', () => {
        expect(s2.apply(null, cases[0].input)).toEqual(cases[0].output);
        expect(s2.apply(null, cases[1].input)).toEqual(cases[1].output);
        expect(s2.apply(null, cases[2].input)).toEqual(cases[2].output);
        expect(s2.apply(null, cases[3].input)).toEqual(cases[3].output);
    });
});