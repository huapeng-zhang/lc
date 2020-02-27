const s1 = require('@target_offer/num_of_one_count');

describe('num of one count from one to a given number', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [0],
            output: 0
        }, {
            input: [-2],
            output: 0
        }, {
            input: [1],
            output: 1
        }, {
            input: [2],
            output: 1
        }, {
            input: [10],
            output: 2
        }, {
            input: [11],
            output: 4
        }, {
            input: [16],
            output: 9
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
});
