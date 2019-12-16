const s1 = require('@medium/evaluate_reverse_polish_notation_1');

describe('evaluate reverse polish notation', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [['2', '1', '+', '3', '*']],
            output: 9
        }, {
            input: [['4', '13', '5', '/', '+']],
            output: 6
        }, {
            input: [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']],
            output: 22
        }, {
            input: [['4', '3', '-']],
            output: 1
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
