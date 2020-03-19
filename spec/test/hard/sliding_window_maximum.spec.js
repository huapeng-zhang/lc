const s1 = require('@hard/sliding_window_maximum');

describe('sliding window maximum', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1,3,-1,-3,5,3,6,7], 3],
            output: [3,3,5,5,6,7]
        }, {
            input: [[1,2,3], 1],
            output: [1,2,3]
        }, {
            input: [[],1],
            output: []
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
});

