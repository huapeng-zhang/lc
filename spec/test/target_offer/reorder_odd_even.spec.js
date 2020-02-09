const s1 = require('@target_offer/reorder_odd_even');

describe('reorder odd even', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: null
        }, {
            input: [[1]],
            output: [1]
        }, {
            input: [[2]],
            output: [2]
        }, {
            input: [[1,3,5]],
            output: [1,3,5]
        }, {
            input: [[2,4,6]],
            output: [2,4,6]
        }, {
            input: [[1,2,3,4]],
            output: [1,3,2,4]
        }, {
            input: [[1,3,2,4]],
            output: [1,3,2,4]
        }, {
            input: [[2,4,1,3]],
            output: [3,1,4,2]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
