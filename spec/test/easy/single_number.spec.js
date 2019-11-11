const solution1 = require('@easy/single_number_1');

describe('single number', () => {
    let cases = [{
        input: [[2, 2, 1]],
        output: 1
    }, {
        input: [[4, 1, 2, 1, 2]],
        output: 4
    }, {
        input: [[1]],
        output: 1
    }];

    it('solution 1', () => {
        expect(solution1.apply(null, cases[0].input)).toEqual(cases[0].output);
        expect(solution1.apply(null, cases[1].input)).toEqual(cases[1].output);
    });
});
