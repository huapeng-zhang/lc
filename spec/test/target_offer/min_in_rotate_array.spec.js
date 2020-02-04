const s1 = require('@target_offer/min_in_rotate_array');

describe('find min number in rotate sorted array', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[]],
            output: null
        }, {
            input: [null],
            output: null
        }, {
            input: [[1]],
            output: 1
        }, {
            input: [[1,1]],
            output: 1
        }, {
            input: [[2,1]],
            output: 1
        }, {
            input: [[10,11,12,13,14,15,5,6,7,8,9]],
            output: 5
        }, {
            input: [[10,11,12,13,14,15,5,6,7,8,9,10]],
            output: 5
        }, {
            input: [[10,11,12,13,14,15,5,5,5,5,6,7,8,9]],
            output: 5
        }, {
            input: [[10,11,12,13,14,15,5]],
            output: 5
        }, {
            input: [[10,11,12,13,14,15,5,6]],
            output: 5
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
