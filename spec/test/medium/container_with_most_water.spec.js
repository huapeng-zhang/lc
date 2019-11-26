const s1 = require('@medium/container_with_most_water_1');
const s2 = require('@medium/container_with_most_water_2');

describe('container with most water', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[1,8,6,2,5,4,8,3,7]],
            output: 49
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
    })
});
