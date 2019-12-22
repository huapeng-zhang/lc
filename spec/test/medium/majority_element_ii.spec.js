const s1 = require('@medium/majority_element_ii_1');

describe('majority element ii', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[3,2,3]],
            output: [3]
        }, {
            input: [[1,1,1,3,3,2,2,2]],
            output: [1,2]
        }, {
            input: [[]],
            output: []
        }, {
            input: [[0,-1,2,-1]],
            output: [-1]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
});
