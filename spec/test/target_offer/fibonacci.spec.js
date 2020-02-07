const s1 = require('@target_offer/fibonacci_1');
const s2 = require('@target_offer/fibonacci_2');

describe('fibonacci', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [0],
            output: 0
        }, {
            input: [1],
            output: 1
        }, {
            input: [30],
            output: 832040
        }, {
            input: [-1],
            output: 0
        }];
    });

    [s1, s2].forEach(s => {
        const wrap = function (params) {
            return new Promise(resolve => {
                resolve(s.solution.apply(null, params));
            });
        };

        it(s.description, () => {
            return Promise.all(cases.map(c => {
                return expectAsync(wrap(c.input)).toBeResolvedTo(c.output);
            }));
        });
    });
});
