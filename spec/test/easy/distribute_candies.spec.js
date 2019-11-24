const s1 = require('@easy/distribute_candies_1');

describe('distribute candies', () => {
    cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1,1,2,3]],
            output: 2
        }, {
            input: [[1,1,2,2,3,3]],
            output: 3
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
