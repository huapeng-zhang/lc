const s1 = require('@easy/house_robber_1');
const s2 = require('@easy/house_robber_2');

describe('house robber', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1, 2, 3, 1]],
            output: 4
        }, {
            input: [[2, 7, 9, 3, 1]],
            output: 12
        }, {
            input: [[7, 2, 3, 9, 1]],
            output: 16
        }, {
            input: [[]],
            output: 0
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        })
    });

    it('solution 2', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toEqual(c.output);
        })
    });
});