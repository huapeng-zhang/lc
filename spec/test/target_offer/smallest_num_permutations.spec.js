const s1 = require('@target_offer/smallest_num_permutations');

describe('the smallest permutations of integer array', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1,1,1]],
            output: '111'
        }, {
            input: [[3,2,1]],
            output: '123'
        }, {
            input: [[3,23,123]],
            output: '123233'
        }, {
            input: [[3,32,34]],
            output: '32334'
        }, {
            input: [[3,32,321]],
            output: '321323'
        }, {
            input: [[33,333]],
            output: '33333'
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
});
