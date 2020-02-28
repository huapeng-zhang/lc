const s1 = require('@target_offer/inverse_pair');

describe('find inverse pair count', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1]],
            output: 0
        }, {
            input: [[1,2]],
            output: 0
        }, {
            input: [[2,2]],
            output: 0
        }, {
            input: [[2,1]],
            output: 1
        }, {
            input: [[7,5,4,6]],
            output: 4
        }, {
            input: [[7,5,6,4]],
            output: 5
        }, {
            input: [[4,3,2,1]],
            output: 6
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
