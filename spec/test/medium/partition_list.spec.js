const s1 = require('@medium/partition_list_1');
const s2 = require('@medium/partition_list_2');
const { arrayToLink } = require('@utils/link');

describe('partition list', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [arrayToLink([1,4,3,2,5,2]), 3],
            output: arrayToLink([1,2,2,4,3,5])
        }, {
            input: [arrayToLink([]), 1],
            output: arrayToLink([])
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
    it('solution 2', () => {
        cases.forEach(c => {
            expect(s2.apply(null, c.input)).toEqual(c.output);
        });
    });
});
