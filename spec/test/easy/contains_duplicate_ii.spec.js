const s1 = require('@easy/contains_duplicate_ii');

describe('contains duplicate ii', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1,2,3,1], 3],
            output: true
        }, {
            input: [[1,0,1,1], 1],
            output: true
        }, {
            input: [[1,2,3,1,2,3], 2],
            output: false
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        })
    })
});
