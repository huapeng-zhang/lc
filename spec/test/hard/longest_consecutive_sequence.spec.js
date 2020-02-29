const s1 = require('@hard/longest_consecutive_sequence');

describe('longest consecutive sequence', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[]],
            output: 0
        }, {
            input: [null],
            output: 0
        }, {
            input: [[0]],
            output: 1
        }, {
            input: [[-4,-3,-2,-1,0]],
            output: 5
        }, {
            input: [[-2,-1,0,1,2]],
            output: 5
        }, {
            input: [[100,4,200,1,3,2]],
            output: 4
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
});
