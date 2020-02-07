const s1 = require('@target_offer/power_1');
const s2 = require('@target_offer/power_2');

describe('power', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [3.3, 2],
            output: 3.3*3.3
        }, {
            input: [3.3, 0],
            output: 1
        }, {
            input: [3, -1],
            output: 1/3
        }, {
            input: [3, 7],
            output: 3*3*3*3*3*3*3
        }, {
            input: [2, -2],
            output: 0.25
        }, {
            input: [0, -1],
            throws: Error
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            if (c.throws === undefined) {
                const delta = s1.apply(null, c.input) - c.output;
                expect(delta).toBeLessThanOrEqual(Number.EPSILON);
                expect(delta).toBeGreaterThanOrEqual(-Number.EPSILON);
            } else {
                expect(() => s1.apply(null, c.input)).toThrowError(c.throws);
            }
        });
    });

    it('solution 2', () => {
        cases.forEach(c => {
            if (c.throws === undefined) {
                const delta = s2.apply(null, c.input) - c.output;
                expect(delta).toBeLessThanOrEqual(Number.EPSILON);
                expect(delta).toBeGreaterThanOrEqual(-Number.EPSILON);
            } else {
                expect(() => s2.apply(null, c.input)).toThrowError(c.throws);
            }
        });
    });
});
