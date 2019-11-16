const s1 = require('@easy/majority_element_1');

describe('majority element', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[3,2,3]],
            output: 3
        }, {
            input: [[2,2,1,1,1,2,2]],
            output: 2
        }, {
            input: [[1]],
            output: 1
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        })
    })
});
