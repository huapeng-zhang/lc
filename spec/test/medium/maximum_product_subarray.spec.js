const s1 = require('@medium/maximum_product_subarray_1');

describe('maximum product subarray', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[2,3,-2,4]],
            output: 6
        }, {
            input: [[-2,0,-1]],
            output: 0
        }, {
            input: [[-9,-8,0,6,7,3,9]],
            output: 1134
        }, {
            input: [[-2,0,3,8]],
            output: 24
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
