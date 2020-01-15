const s1 = require('@hard/trapping_rain_water_1');

describe('trapping rain water', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[0,1,0,2,1,0,1,3,2,1,2,1]],
            output: 6
        }, {
            input: [[2,1,0,2]],
            output: 3
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
