const s1 = require('@target_offer/quick_sort');

describe('quick sort', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[5]],
            output: [5]
        }, {
            input: [[5,5,5]],
            output: [5,5,5]
        }, {
            input: [[3,4,5,6,7]],
            output: [3,4,5,6,7]
        }, {
            input: [[7,6,5,4,3]],
            output: [3,4,5,6,7]
        }, {
            input: [[5,5,4,8,3,7,5,6,2,1,5]],
            output: [1,2,3,4,5,5,5,5,6,7,8]
        }, {
            input: [[]],
            output: []
        }, {
            input: null,
            output: null
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
