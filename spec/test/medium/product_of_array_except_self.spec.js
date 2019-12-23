const s1 = require('@medium/product_of_array_except_self_1');

describe('product of array except self', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1,2,3,4]],
            output: [24,12,8,6]
        }, {
            input: [[]],
            output: []
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
