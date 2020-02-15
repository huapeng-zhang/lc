const s1 = require('@target_offer/is_stack_output_sequence');

describe('is stack output sequence', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[],[]],
            output: true
        }, {
            input: [[1,2,3,4,5],[4,5,3,2,1]],
            output: true
        }, {
            input: [[1,2,3,4,5],[4,3,5,1,2]],
            output: false
        }, {
            input: [[1,2,3,4,5,],[4,3,2,1,7]],
            output: false
        }, {
            input: [[1],[1]],
            output: true
        }, {
            input: [[1],[2]],
            output: false
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
