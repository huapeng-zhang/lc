const s1 = require('@target_offer/max_luck_num');

describe('max luck number', () => {
    let cases = [];

    beforeEach(() => {
        cases = [{
            input: [[0,3,5], '1'],
            output: '0'
        }, {
            input: [[0,3,5],'189'],
            output: '55'
        }, {
            input: [[0,3,5],'322'],
            output: '305'
        }, {
            input: [[0,3,5], '323'],
            output: '305'
        }, {
            input: [[3,5,7],'746'],
            output: '737'
        }, {
            input: [[3,5,7], '222'],
            output: '77'
        }, {
            input: [[3,5,7], '2'],
            output: null
        }, {
            input: [[3,5,7], '322'],
            output: '77'
        }, {
            input: [[3,5,7], '3322'],
            output: '777'
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null,c.input)).toEqual(c.output));
    });
});
