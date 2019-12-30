const s1 = require('@medium/ones_and_zeroes_1');
const s2 = require('@medium/ones_and_zeroes_2');

describe('ones and zeroes', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [["10", "0001", "111001", "1", "0"], 5, 3],
            output: 4
        }, {
            input: [["10", "0", "1"], 1, 1],
            output: 2
        }, {
            input: [["101","110","0","0","0","0001","1010","01","10110","0011","0","10","11","110","1","10","0","1","00","1","0","010","1","000","0","101","0","11","1","01111","110000","1","01"], 47, 88],
            output: 33
        }, {
            input: [["0","11","1000","01","0","101","1","1","1","0","0","0","0","1","0","0110101","0","11","01","00","01111","0011","1","1000","0","11101","1","0","10","0111"], 9, 80],
            output: 17
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
    it('solution 2', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toEqual(c.output);
        });
    });
});
