const s1 = require('@target_offer/dominating_num_1');
const s2 = require('@target_offer/dominating_num_2');

describe('dominating num', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [null],
            output: null
        }, {
            input: [[]],
            output: null
        }, {
            input: [[1]],
            output: 1
        }, {
            input: [[1, 1]],
            output: 1
        }, {
            input: [[1, 2, 2]],
            output: 2
        }, {
            input: [[1, 2, 3, 5, 5, 5, 5]],
            output: 5
        }, {
            input: [[5, 1, 5, 2, 5, 3, 5]],
            output: 5
        }, {
            input: [[1, 2, 3, 2, 2, 2, 5, 4, 2]],
            output: 2
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
    it('solution 2', () => {
        cases.forEach(c => expect(s2.apply(null, c.input)).toEqual(c.output));
    });
});
