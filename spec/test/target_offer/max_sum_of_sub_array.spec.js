const s1 = require('@target_offer/max_sum_of_sub_array_1');
const s2 = require('@target_offer/max_sum_of_sub_array_2');

describe('max_sum_of_sub_array', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: null
        }, {
            input: [[]],
            output: null
        }, {
            input: [[1]],
            output: 1
        }, {
            input: [[1,2,3]],
            output: 6
        }, {
            input: [[-1,-2,-3]],
            output: -1
        }, {
            input: [[1,-2,3,10,-4,7,2,-5]],
            output: 18
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
    it('solution 2', () => {
        cases.forEach(c => expect(s2.apply(null, c.input)).toEqual(c.output));
    });
});
