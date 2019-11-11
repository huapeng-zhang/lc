const solution1 = require('@easy/valid_palindrome_1');

describe('valid palindrome', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: ['A man, a plan, a canal: Panama'],
            output: true
        }, {
            input: ['race a car'],
            output: false
        }, {
            input: [''],
            output: true
        }, {
            input: ['  a  A'],
            output: true
        }];
    });

    it('solution 1', () => {
        expect(solution1.apply(null, cases[0].input)).toEqual(cases[0].output);
        expect(solution1.apply(null, cases[1].input)).toEqual(cases[1].output);
    })
});