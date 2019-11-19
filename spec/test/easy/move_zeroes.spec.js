const s1 = require('@easy/move_zeroes_1');
const s2 = require('@easy/move_zeroes_2');

describe('move zeroes', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[0,1,0,3,12]],
            output: [1,3,12,0,0]
        }, {
            input: [[1,2,3,4]],
            output: [1,2,3,4]
        }, {
            input: [[0,0,0]],
            output: [0,0,0]
        }, {
            input: [[1, 0]],
            output: [1,0]
        }, {
            input: [[1,0,1]],
            output: [1,1,0]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            s1.apply(null, c.input);
            expect(c.input[0]).toEqual(c.output);
        });
    });

    it('solution 2', () => {
        cases.forEach(c => {
            s2.apply(null, c.input);
            expect(c.input[0]).toEqual(c.output);
        });
    });
});
